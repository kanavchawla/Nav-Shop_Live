const { mongoose, model } = require("mongoose");

// const Schema = mongoose.Schema;
// const { Product_db } = require("../init/db");

const productSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: false,
  },
  Colour: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
