import Product from "../models/product.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    response.status(200).json(products);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

export const getProductByid = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
