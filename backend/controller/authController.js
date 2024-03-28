import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generatTokenAndCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try {
        const { email, userName, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password do'nt match" })
        }

        const existingemail = await User.findOne({ email });
        const user = await User.findOne({ userName })
        if (user || existingemail) {
            return res.status(400).json({ error: " email or username already exists" })
        }


        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt)

        // https://avatar-placeholder.iran.liara.run/
        //  https://avatar.iran.liara.run/public/boy?username=mehdi
        //https://api.dicebear.com/8.x/pixel-art/svg?seed=Jakj
        //https://ui-avatars.com/api/?name=3meh
        const boyProfilePic = ` https://i.pravatar.cc/150?u=${userName}`
        //const girlProfilePic = ` https://avatar.iran.liara.run/public/girl?username=${userName}`

        
        const newuser = new User({
            email,
            userName,
            password: hashpass,
            gender,
            profilePic: boyProfilePic  //gender === 'M' ? boyProfilePic : girlProfilePic
        })

        try {
            generatTokenAndCookie(newuser._id, res);
            await newuser.save();

            return res.status(201).json({
                'msg': 'user created secssesfly', 'user': {
                    _id: newuser._id,
                    email: newuser.email,
                    userName: newuser.userName,
                    profilePic: newuser.profilePic
                }
            })
        } catch (error) {
            console.error('Error saving user:', error);
            res.status(500).json({ msg: 'saving usre error' });
        }


    } catch (error) {
        console.log('error in signup controller', error.messge);
        return res.status(500).json({ 'msg': 'intrnet server eror from signup' })
    }
}


export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const chackPassword = await bcrypt.compare(password, user?.password || "");
        
        if (!user ) {
            return res.status(400).json({ error: 'Invalid username pless check the username' })
        }

        if (!chackPassword) {
            return res.status(400).json({ error: 'Invalid  password pless check the password' })
        }

        generatTokenAndCookie(user._id, res);

        return res.status(201).json({
            'msg': 'user login secssesfly', 'user': {
                _id: user._id,
                email: user.email,
                userName: user.userName,
                profilePic: user.profilePic
            }
        })

    } catch (error) {
        console.log('error in login controller', error.messge);
        return res.status(500).json({ 'msg': 'intrnet server eror from login ' })
    }
}

export const logout =async (req,res)=>{
  try {
          res.cookie("jwt","",{maxAge:0})
   return res.status(200).json({'msg':'logged out successfuly'})
  } catch (error) {
    console.log('error in logout controller', error.messge);
    return res.status(500).json({ 'msg': 'intrnet server eror from logout ' })
  }
}