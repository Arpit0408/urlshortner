import express from 'express';
import { createShortUrl , createShortUrlAuth } from '../controllers/shortUrlController.js';
const router = express.Router(); 

router.post('/', createShortUrl);
router.post('/', createShortUrlAuth)

export default router;