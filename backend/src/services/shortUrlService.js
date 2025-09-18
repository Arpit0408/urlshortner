import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";
import {checkCustomSlug} from "../dao/shortUrl.js";

export const shortUrlServicewithoutUser = async (url) =>{
    const shortUrl = generateNanoId(5);
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const shortUrlServicewithUser = async (url,slug=null, userId ) =>{
  console.log("slug",slug);
  
    const shortUrl = slug || generateNanoId(5);
    const exists =await checkCustomSlug(slug)
    if(exists) throw new Error("shorturl alrready exists")
  await saveShortUrl( shortUrl, url,  userId);
  return shortUrl;
}