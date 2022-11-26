import paytmchecksum from "../paytm/paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from "../index.js";
import formidable from "formidable";
import https from "https";

export const addpayment = async (request, response) => {
  try {
    let paytmCheckSum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );

    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmCheckSum,
    };
    response.status(200).json(params);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const paytmResponse = (request, response) => {
  const form = new formidable.IncomingForm();

  let paytmCheckSum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;

  let isVerifySignature = paytmchecksum.verifySignature(
    request.body,
    paytmMerchantKey,
    paytmCheckSum
  );
  if (isVerifySignature) {
    let paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDERID"] = request.body.ORDERID;
    paytmchecksum
      .generateSignature(paytmParams, paytmMerchantKey)
      .then(function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;

        let post_data = JSON.stringify(paytmParams);

        let options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };
        let res = "";
        let post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            res += chunk;
          });
          post_res.on("end", function () {
            let result = JSON.parse(res);
            response.redirect("http://localhost:3000/");
          });
        });
        post_req.write(post_data);
        post_req.end();
      });
  } else {
    console.log("mismatched");
  }
};
