import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
    profilePic: {
        type: String
    }

},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;
