const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    min: 0,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    minlength: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
