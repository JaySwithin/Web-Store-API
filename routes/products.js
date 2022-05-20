const express = require("express");
const router = express.Router();

// IMPORT PRODUCT MODEL.
const productModel = require("./../models/productsModel");

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

module.exports = router;
