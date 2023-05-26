import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getCategoriesControlller,
  singleCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put("/update-category/:id", requireSignIn, updateCategoryController);

//get all categories
router.get("/get-category", getCategoriesControlller);

// get single category
router.get("/single-category/:slug", singleCategoryController);


export default router;
