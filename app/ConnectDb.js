import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/movie")
        console.log("Connected");
    } catch (err) {
        console.log(err);
    }
  
}

export default ConnectDb;