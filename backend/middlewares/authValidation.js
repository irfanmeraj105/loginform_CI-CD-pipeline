const jwt = require("jsonwebtoken");

const ensureAuthentication = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized! JWT token is required to get login.",
    });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SEC_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized! JWT token is either expired or invalid.",
    });
  }
};

// Exporting the module
module.exports = ensureAuthentication;
