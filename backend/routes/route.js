import express from "express";
import { userSignup, userLogin } from "../controller/user.js";
import { getProducts, getProductByid } from "../controller/product.js";
import { addpayment, paytmResponse } from "../controller/paymentcont.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProductByid);
router.post("/payment", addpayment);
router.post("/callback", paytmResponse);

export default router;
