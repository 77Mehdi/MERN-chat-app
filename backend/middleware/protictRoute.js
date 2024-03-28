import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error:'No token find'})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:'Invalid token'})
        }

        const user= await User.findById(decoded.user_id).select('-password');
        if(!user){
            return res.status(404).json({error:'user not found'})
        }
        
        req.user = user

        next();

    } catch (error) {
        console.log('middleawr error ',error.message)
        res.status(500).json({error:'Intrnet server error from middlwar'})
    }
}


export default protectRoute