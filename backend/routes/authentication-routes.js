const express = require("express");
const router = express.Router();

// import controllers
const {
  registerUser,
  login,
} = require("../controllers/authentication-controller");

// Registration-routes
router.route("/reg").post(registerUser);


// Login-routes
router.route("/login").post(login);

module.exports = router;
