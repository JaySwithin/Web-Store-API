const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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
router.get("/by-category/:productCategory", (req, res) => {
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
router.get("/by-id/:id", (req, res) => {
  try {
    let { id } = req.params;
    productModel
      .findOne({ id: productId })
      .then((result) => {
        if(result.length){
          res.json({
            status: "SUCCESS",
            message: "Product fetched successfully.",
            data: result,
          });
        } else {
          res.json({
            status: "FAILED",
            message: "Product does not exist",
            data: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "FAILED",
          message:
            "An error occurred getting activity details. Try again later",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

// ROUTE TO ADD A NEW PRODUCT
router.post("/add-product", (req, res) => {
  try {
    let {
      productName,
      productDescription,
      productCategory,
      quantityAvailable
    } = req.body; 

    // Trim of any white spaces
    productName = productName.trim(),
    productDescription = productDescription.trim(),
    productCategory = productCategory.trim(),
    quantityAvailable = quantityAvailable.trim()

    if([productName, productDescription, productCategory, quantityAvailable].every(Boolean)){
      const newProduct = new productModel({
        productId: uuidv4(),
        productName,
        productDescription,
        productCategory,
        quantityAvailable,
        dateAdded: new Date(Date.now())
      })

      newProduct.save()
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Product saved successfully.",
        });
      })
      .catch((error) => {
        console.log(error)
        res.json({
          status: "FAILED",
          message: "Could not save product data.",
        });
      })
    } else {
      res.json({
        status: "FAILED",
        message: "Please fill all input fields",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
