const express = require("express");

const { protectRoute } = require("../controller/authController");

const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  addIntoFvt,
} = require("../controller/productController");

const router = express.Router();

router.get("/all", protectRoute, getAllProducts);
router.post("/add", addProduct);
router.delete("/delete/:id", deleteProduct);
router.patch("/update", updateProduct);
router.post("addFvt", addIntoFvt);

module.exports = router;
