const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productDescription: String,
  productCategory: {
    type: String,
    enum: ["PHONES", "COMPUTERS", "ELECTRONICS", "FURNITURE", "CLOTHES"],
  },
  quantityAvailable: Number,
  dateAdded: Date,
});

const productModel = mongoose.model("Products", ProductSchema);
module.exports = productModel;
