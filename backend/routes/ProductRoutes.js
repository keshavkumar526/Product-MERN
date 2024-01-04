const express = require("express");
const router = express.Router();

const {
	uploadProduct,
	getAllProducts,
} = require("../controllers/ProductController");

router.post("/addProduct", uploadProduct);
router.get("/getAllProducts", getAllProducts);

module.exports = router;
