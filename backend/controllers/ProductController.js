const Product = require("../models/product");

const uploadProduct = async (req, res) => {
	await Product.create(req.body);
	res.status(200).json({ message: "Product Upload Successfully" });
};

const getAllProducts = async (req, res) => {
	const products = await Product.find({});
	res.send(JSON.stringify(products));
};

module.exports = { uploadProduct, getAllProducts };
