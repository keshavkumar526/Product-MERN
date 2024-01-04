const express = require("express");
const router = express.Router();
const { userSignUp, userLogin } = require("../controllers/UserController");

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

module.exports = router;
