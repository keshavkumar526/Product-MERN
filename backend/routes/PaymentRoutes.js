const express = require("express");
const router = express.Router();

const { checkOut } = require("../controllers/PaymentController");

router.post("/checkout", checkOut);

module.exports = router;
