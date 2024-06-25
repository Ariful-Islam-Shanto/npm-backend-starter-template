import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// This a approach where the connection is been done within the index  file with IIFE (Immediately Invoked Function Expression)

import express from "express";
const app = express();

 
;( async () => {
    try {
        // Connect mongoose
     await   mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)

     
     app.on("error", () => {
        console.log("Error", error)

        throw error;
     })

     //? Listen the port
     app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
     })
    } catch (error) {
        console.error("Error", error);
    }
}) ();

