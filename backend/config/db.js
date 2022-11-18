import mongoose from "mongoose";

export const Connection = async () => {
  const URL =
    "mongodb+srv://root:root@cluster0.w9novtl.mongodb.net/flipkartretryWrites=true&w=majority";

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connect");
  } catch (err) {
    console.log(err);
  }
};
export default Connection;
