import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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


server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`app worcing on port ${PORT}`)
})



// app.listen(PORT,()=>{
//     connectToMongoDB()
//     console.log(`app worcing on port ${PORT}`)
// })