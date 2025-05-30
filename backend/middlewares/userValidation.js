const joi = require("joi");

const userSignupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(105).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  next();
};

const userLoginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "bad request", error });
  }
  next();
};

module.exports = {
  userLoginValidation,
  userSignupValidation,
};
