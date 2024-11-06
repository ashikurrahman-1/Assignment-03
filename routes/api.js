
import express from 'express';
const router = express.Router();
import * as blogController from "../app/controllers/blogController.js";

// Create Route
router.post("/createBlog", blogController.createBlog);

// Read Blog
router.get("/readBlog", blogController.readBlog);

// Update Blog
router.put("/updateBlog", blogController.updateBlog);

// Delete Blog
router.delete("/deleteBlog", blogController.deleteBlog);

export default router;
