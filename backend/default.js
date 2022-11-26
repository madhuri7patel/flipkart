import { products } from "./constant/data.js";
import Product from "./models/product.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    //Product.insertMany(products);
    console.log("data import sucessfully");
  } catch (err) {
    console.log(err);
  }
};

export default DefaultData;
