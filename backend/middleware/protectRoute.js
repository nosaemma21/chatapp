const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Set req.user to the user - becomes available in the request
    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = protectedRoute;
