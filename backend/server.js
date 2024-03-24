import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import theRoute from "./routes/authRoute.js";
import routeMS from "./routes/nessageRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express()
dotenv.config();
const PORT = process.env.PORT ||  5000 

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",theRoute);
app.use('/api/message',routeMS);
app.use('/api/users',userRoute);


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`app worcing on port ${PORT}`)
})