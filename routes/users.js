const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// IMPORT USER MODELS
const userModel = require("../models/userModel");
const { route } = require("./products");

// ROUTE TO REGISTER A USER
router.post("/register", (req, res) => {
  try {
    let { fullName, email, phoneNumber, password } = req.body;
    if (
      [fullName, email, phoneNumber, password].every(Boolean)
    ) {
      userModel
        .find({ email })
        .then((result) => {
          if (result.length) {
            res.json({
              status: "FAILED",
              message: "A user with this email is already registered.",
            });
          } else {
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds).then((hashedPassword) => {
              const newUser = new userModel({
                fullName,
                email,
                phoneNumber,
                password,
                verified: false,
              });

              newUser.save().then((result) => {
                res.json({
                  status: "SUCCESS",
                  message: "Registered successfully.",
                });
              });
            })
            .catch((error) => {
              res.json({
                status: "FAILED",
                message: "Could not register account. Please try again in a few minutes."
              });
            })
          }
        })
        .catch((error) => {
          res.json({
            status: "FAILED",
            message:
              "Could not register account. Please try again in a few minutes.",
          });
        });
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
