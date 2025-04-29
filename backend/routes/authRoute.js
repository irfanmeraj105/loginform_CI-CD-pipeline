const express = require("express");
const router = express.Router();
const ensureAuthentication = require("../middlewares/authValidation");

router.get("/", ensureAuthentication, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: "10000",
    },
    {
      name: "tv",
      price: "200000",
    },
  ]);
});

// exporting the module

module.exports = router;
