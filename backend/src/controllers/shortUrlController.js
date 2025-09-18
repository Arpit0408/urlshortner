import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/shortUrlSchema.js'; 
import {shortUrlServicewithoutUser , shortUrlServicewithUser} from "../services/shortUrlService.js";

export const createShortUrl = async(req, res) => {
  const { url, slug } = req.body;

  try {
    // If user is authenticated
    if (req.user && req.user._id) {
      console.log("Authenticated user ID:", req.user._id);
      if (slug) {
        console.log("Custom slug provided:", slug);
      }

      const shortUrl = await shortUrlServicewithUser(url, slug, req.user._id);
      console.log('Authenticated /custom route hit:', url);
      return res.send(process.env.APP_URL + "/" + shortUrl);
    }

    // If no user is authenticated
    const shortUrl = await shortUrlServicewithoutUser(url);
    console.log('Unauthenticated / route hit:', url);
    return res.send(process.env.APP_URL + "/" + shortUrl);
    
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).send("Internal Server Error");
  }
};


export const createShortUrlAuth = async(req, res) => {
    const {url , slug} = req.body;
    console.log("user id is :", req.user);
    console.log("slug cotro" , slug);
    
  const shortUrl = await shortUrlServicewithUser(url, slug, req.user._id)
  res.send(process.env.APP_URL +"/" + shortUrl);
  console.log('post / route hit custom',url);
}

export const redirectFromShortUrl = async(req , res) =>{

  const {shorturl} = req.params;
  const url = await urlSchema.findOneAndUpdate({ short: shorturl },{$inc:{clicks:1}});
  if(url){
    res.redirect(url.full)
  }
  else{
    res.status(404).send("not found")
  }
}


