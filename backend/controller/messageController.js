import Conversation from "../models/conversation.js";
import Message from "../models/message.js";
import { getReceverSocketId,io } from "../socketio/socket.js";


export const sendMessage = async (req, res) => {
    try {

        const senderID = req.user._id;
        const { message } = req.body;
        const { id: receiverID } = req.params;



        let conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderID, receiverID],
            })
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message,
        })
        if (newMessage) {
            conversation.message.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]);
      //####################################################
      // lisen to the sender messages and show the new message
        const ReceverSocketId = getReceverSocketId(receiverID)
        if(ReceverSocketId){
            // use to send event to specific client  okayyy
            io.to(ReceverSocketId).emit("newMessage",newMessage);
        }
      //###################################################
        return res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in sendmessag controller", error.message);
        return res.status(500).json({ error: 'Intrnet server error from sendmessage' })
    }
}


export const getMessage = async (req, res) => {
    try {
        const { id: userChatID } = req.params;
        const senderID = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, userChatID] },

        }).populate("message");

        return res.status(200).json(conversation ? conversation.message : [])
    } catch (error) {
        console.log("error in getmessage controller", error.message);
        res.status(500).json({ 'msg': 'Intrnat server error from getmesage' })
    }
}