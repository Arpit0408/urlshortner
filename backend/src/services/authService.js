import User from '../models/user.model.js';
import { createUser, findUserByEmail } from '../dao/userDao.js';
import { ConflictError } from '../utils/errorHandler.js';
import { signToken } from "../utils/helper.js";
import bcrypt from 'bcryptjs';

export const registerUser = async (name, email, password) => {
  
  console.log(email);
  
    const user = await findUserByEmail(email);
    if(user)  throw new ConflictError("user exist already");

    const newUser = await createUser(name, email, password);
    const token = await signToken({id: newUser.id})
  return token;


}

export const updateUser = async(name , email, password) =>{
  
  
}

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email, { selectPassword: true }); 
  if (!user) {
    throw new ConflictError("Invalid email or password");
  }

  // Password compare karo
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ConflictError("Invalid email or password");
  }
  // Token generate karo
  const token = await signToken({ id: user.id });
  return {token , user};
};