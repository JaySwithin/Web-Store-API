const express = require("express");
const router = express.Router();

// IMPORT PRODUCT MODEL.
const productModel = require("./../models/productsModel");

// ROUTE TO GET ALL PRODUCTS
router.get("/", (req, res) => {
  try {
    productModel
      .find({})
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Products successfully fetched.",
          data: result,
        });
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "FAILED",
          message: "Error occured fetching data.",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

// ROUTE TO GET PRODUCTS BY CATEGORY
router.get("/:productCategory", (req, res) => {
  try {
    let { productCategory } = req.params;
    productModel
      .find({ productCategory })
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Products by category fetched.",
          data: result,
        });
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "FAILED",
          message: "An error occurred getting products by category.",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

// ROUTE TO GET A PRODUCT BY ID
router.get("/:id", (req, res) => {
  try {
    let { id } = req.params;
    productModel
      .findOne({ id: productId })
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Product fetched successfully.",
          data: result,
        });
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "FAILED",
          message: "An error occurred getting activity details. Try again later",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
