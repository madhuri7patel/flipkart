import { products } from "./constant/data.js";
import Product from "./models/product.js";

const DefaultData = async () => {
  try {
    //await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data import");
  } catch (err) {
    console.log(err);
  }
};

export default DefaultData;
