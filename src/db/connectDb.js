import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


//? This is external approach for connecting the db using external file
//? Rather than using index.js directly for organize code.

const connectDb = async () => {
    try {
        // Connect mongoose
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    console.log(`\n MongoDb server is connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export default connectDb;

   


