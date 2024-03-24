import User from "../models/userModel.js"


export const getUserForSidebar = async(req,res)=>{
    try {
        const loggedUserID = req.user._id

        const allusers = await User.find({_id:{$ne:loggedUserID}}).select("-password")

        return res.status(200).json(allusers)
        
    } catch (error) {
        console.log('error in getyserforsidebar',error.message)
        res.status(500).json({'msg':'internet server error from getuserforsidbar'})
    }
}