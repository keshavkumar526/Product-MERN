const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const userRoute = require("./routes/UserRoutes");
const newProduct = require("./routes/ProductRoutes");
const paymentRoute = require("./routes/PaymentRoutes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("from local host");
});

app.use("/user", userRoute);
app.use("/products", newProduct);
app.use("/payment/", paymentRoute);

app.listen(PORT, () => {
  console.log("Server is running at : ", PORT);
});
