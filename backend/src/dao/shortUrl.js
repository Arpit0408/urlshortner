import urlSchema from '../models/shortUrlSchema.js';
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full: longUrl,
      short: shortUrl,
      userId: userId || "",  // only add if defined
    });

    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(`Failed to save URL: ${err.message}`);
  }
};

export const checkCustomSlug = async (slug) => {
 return await urlSchema.findOne({short:slug})

}