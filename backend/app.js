import express from 'express';
import {nanoid} from 'nanoid';
import connectToMongo from './src/config/mongo-config.js';
import urlSchema from './src/models/shortUrlSchema.js';
import shortUrlRoute from './src/routes/shortUrl_route.js';
import {redirectFromShortUrl} from './src/controllers/shortUrlController.js';
import { errorHandler } from "./src/utils/errorHandler.js";
import authRoutes from "./src/routes/authRoutes.js"
import urlRoutes from "./src/routes/urlRoutes.js"
import cors from "cors";
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';
const app = express();
const allowedOrigins = ['http://localhost:5173', 'http://localhost:2300'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
// app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser)

app.get('/', (req, res) => {
    const url = req.body;
  console.log('GET / route hit'),url;
});


// create 
app.use('/api/create',shortUrlRoute );

// get short url
app.get("/:shorturl", redirectFromShortUrl)

// auth routes
app.use("/api/auth" , authRoutes);

// url routes
app.use("/api/urls" , urlRoutes);


// Error Handling Middleware (should be last)

app.use(errorHandler)

app.listen(2300, () => {
    connectToMongo();
  console.log('Server is running on http://localhost:2300/');
});
