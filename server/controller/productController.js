const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).send(products);
  } catch (err) {
    res.status(400).json("Product not fetched");
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;

    const product = await Product.create(data);

    res.status(201).send(product);
  } catch (err) {
    res.status(400).json("Product Add Failed");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);

    res.status(200).json("Product Deleted");
  } catch (err) {
    res.status(400).json("Product Delete Failed");
  }
};

const updateProduct = (req, res) => {
  res.status(200).json("Product Updated");
};

const addIntoFvt = (req, res) => {
  res.status(200).json("Product Added to Fvt");
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  addIntoFvt,
};
