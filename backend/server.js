const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("../backend/routes/userRouter");
const productsRouter = require("../backend/routes/authRoute");
require("./models/dbConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`server is running of port:${port}`);
});
