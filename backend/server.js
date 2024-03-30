import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path  from 'path'
import cors from 'cors'

import connectToMongoDB from "./db/connectToMongoDB.js";
import theRoute from "./routes/authRoute.js";
import routeMS from "./routes/nessageRoute.js";
import userRoute from "./routes/userRoute.js";
import { app ,server} from "./socketio/socket.js";




dotenv.config();
const PORT = process.env.PORT ||  5000 

// app= express()



app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
}));

app.use("/api/auth",theRoute);
app.use('/api/message',routeMS);
app.use('/api/users',userRoute);

//################  put the app on the server onlin 
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"/frontend/dist")))  

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
}) 
//###################

server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`app worcing on port ${PORT}`)
})



// app.listen(PORT,()=>{
//     connectToMongoDB()
//     console.log(`app worcing on port ${PORT}`)
// })