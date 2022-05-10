const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  
});

const productModel = mongoose.model("Products", ProductSchema);
module.exports = productModel;
