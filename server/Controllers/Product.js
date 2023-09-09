//model
const Product = require("../model/Product");

async function addProduct(req, res) {
  const { Type, Brand, Size, Image, Colour } = req.body;
  try {
    const product = new Product({
      Type,
      Brand,
      Size,
      Image,
      Colour,
    });
    await product.save();
    res.status(201).json({ message: "Product added" });
  } catch (err) {
    res.status(err.message);
  }
}

module.exports = addProduct;
