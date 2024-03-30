// this file is like the server.js  
// we create server using socket.io 

import { Server } from "socket.io";
import http from 'http'
import express  from "express";

const app = express()

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:['http://localhost:3000'],
        methods:["GET","POST"]
    }
});

//##########################
// lisen to the sender messages and show the new message
export const getReceverSocketId = (receiverID)=>{
    return userSocka[receiverID]
} 
//###########################

 const userSocka = {}

// this bart is like the app.listen()
io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)
     
    const userId = socket.handshake.query.userId
    if(userId!="undefined") userSocka[userId] = socket.id;

    //io.emit() is useed to send evets to all the connected clinte
    io.emit('getOnlinUser',Object.keys(userSocka))

    socket.on('disconnect',()=>{
        console.log("user disconnect",socket.id)
        delete userSocka[userId];
        io.emit('getOnlinUser',Object.keys(userSocka))
    })
})

export{app,io,server}

































