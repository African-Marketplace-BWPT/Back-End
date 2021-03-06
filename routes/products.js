const { Router } = require("express");
const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const router = express.Router();

// Import Auth middleware
const { protect } = require("../middleware/auth");

router.route("/").get(getProducts).post(protect, createProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = router;
