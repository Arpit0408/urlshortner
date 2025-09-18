import { cookieOptions } from '../config/config.js';
import {registerUser , loginUser} from '../services/authService.js';

export const register_user = async(req, res) =>{
    // add jwt register
    const {name, email, password} = req.body;
    const token = await registerUser(name , email , password);
    // res.user =user;
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"login success"});
};

export const login_user = async(req, res) =>{
    const { email, password} = req.body;
        const {token , user} = await loginUser(email , password);
console.log(token);
// res.user = user;
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"login success"});
}

export const logout_user =  async (req, res) => {
    res.clearCookie("accessToken")
    res.status(200).json({message:"logout success"})
}

export const get_current_user =  async (req, res) => {
    res.status(200).json({user:req.user})
}

export const update_current_user = async(req, res) =>{
      // add jwt register
    const {name, email, password} = req.body;
    const token = await updateUser(name , email , password);
    // res.user =user;
    res.status(200).json({message:"login success"});
}