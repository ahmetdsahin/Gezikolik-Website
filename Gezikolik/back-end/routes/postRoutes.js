import express from "express";
const router = express.Router();
import { createPost, deletePost, gelAllPosts, getPost, updatePost } from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createPost).get(gelAllPosts);
router
    .route("/:slug")
    .put(authGuard, adminGuard, updatePost)
    .delete(authGuard, adminGuard, deletePost)
    .get(authGuard,adminGuard,getPost);
    
export default router;
