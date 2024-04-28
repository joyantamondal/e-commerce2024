import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productFiltersController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//  get All Product
router.get("/get-product", getProductController);

//  get single Product
router.get("/get-product/:slug", getSingleProductController);

//  get  Photo
router.get("/product-photo/:pid", productPhotoController);

// delete Product
router.delete("/delete-product/:pid", deleteProductController);

//update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//  filter  Photo
router.post("/product-filters", productFiltersController);

export default router;
