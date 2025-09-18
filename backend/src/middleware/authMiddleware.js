import { findUserById } from "../dao/userDao.js";
import { verifyToken } from "../utils/helper.js"

export const authMiddleware =async (req, res, next) =>{
    const token = req.cookies.accessToken
    if(!token) return res.status(401).json({message:"unautherized"});
    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded);
        console.log(user);
        
        if(!user) return res.status(401).json({message:"unautherized"});
        req.user =user
        next()
    } catch (error) {
        return res.status(401).json({message:"unautherized"})
    }
}
