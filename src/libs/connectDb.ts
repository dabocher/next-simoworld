import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const connectDb = async () => {
  
  try {
    const{ connection} = await mongoose.connect(process.env.MONGODB_URI!);
      if(connection.readyState === 1){
        console.log("Connected to MongoDB");
        return Promise.resolve();
    } 
  } catch (error) {
    console.log("Error connecting to MongoDB");
    return Promise.reject();
  }
};