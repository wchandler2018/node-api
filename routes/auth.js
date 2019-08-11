const express = require("express");
const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
  socialLogin
} = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {
  userSignupValidator,
  passwordResetValidator
} = require("../validation/index");

const router = express.Router();

//forgot password
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);
router.post("/social-login", socialLogin);
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

//any route containing :userId the app should first execute userById
router.param("userId", userById);

module.exports = router;
