import express from "express"
import { getAllUserUrls } from "../controllers/urlController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/urls",authMiddleware, getAllUserUrls)

export default router