const express = require("express");
const {
  login,
  signup,
  forgetPassword,
  restPassword,
} = require("../controller/userController");
const router = express.Router();

// Router Middleware
const attachDate = (req, res, next) => {
  req.dateJoining = new Date().toISOString();
  req.username = "Sir. " + req.body.username;
  next();
};

// Login Request
router.post("/login", login);
router.post("/signup", attachDate, signup);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", restPassword);

module.exports = router;
