const express = require("express");
const router = express.Router();

// IMPORT PRODUCT MODEL.
const productModel = require("./../models/productsModel");

router.get('/', (req, res) => {
  res.send('Working now')
})

module.exports = router