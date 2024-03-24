
import mongoose from "mongoose";

const conectToMongoDB = async ()=>{
    try {
          
      await mongoose.connect(process.env.MONGO_DB_URI)
      console.log('conect secssesfly')
    } catch (error) {
        console.log('error conecting to mongoDB')
    }
}


export default conectToMongoDB;