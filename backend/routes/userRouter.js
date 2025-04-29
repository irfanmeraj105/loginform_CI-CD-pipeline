const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/userController");
const {
  userLoginValidation,
  userSignupValidation,
} = require("../middlewares/userValidation");
const router = express.Router();

router.post("/signup", userSignupValidation, signupController);

router.post("/login", userLoginValidation, loginController)

module.exports = router;
