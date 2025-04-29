const bcrypt = require("bcrypt");
const { userModel } = require("../models/userModel");
const jwt = require("jsonwebtoken");

// signup function code 
const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "bad request user is already exist in our database",
        success: false,
      });
    }
    const newUser = new userModel({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    res.status(201).json({ message: "signup Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal Server Error", success: true });
  }
};

// login function code

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Forbidden! Check user email or password",
        success: false,
      });
    }
    const isPassEmail = await bcrypt.compare(password, user.password);
    if (!isPassEmail) {
      return res.status(403).json({
        message: "Forbidden! Check user email or password",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user.id },
      process.env.SEC_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal Server Error", success: true });
  }
};

// exporting the modules
module.exports = {
  signupController,
  loginController,
};
