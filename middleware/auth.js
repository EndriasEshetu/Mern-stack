const jwt = require("jsonwebtoken");
const getConfigValue = require("../utils/getConfigValue");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  // Verify token
  try {
    const decoded = jwt.verify(
      token,
      getConfigValue("jwtSecret", "JWT_SECRET"),
    );
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
