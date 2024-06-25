// Using dotenv by require syntax require('dotenv').config()
//? Module syntax
import dotenv from "dotenv";
import path from "path"; // Import the path module
//! When importing any file from another folder make sure to add the extention like .js
import connectDb from "./db/connectDb.js";
import { error } from "console";
import { app } from "./app.js";
dotenv.config({
    path: "../.env"
});



//? External approach to connect to db
connectDb()
.then(() => {
    app.on("error", () => {
        console.log("Error", error)

        throw error;
     })

  //? If successfully the database if connected then listen to the port
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })

  app.get('/', (req, res) => {
    res.send('Server is running perfectly.')
  })
})
.catch((error) => {
    console.log("MongoDB connection failed", error);
})





/* This a approach where the connection is been done within the index  file with IIFE (Immediately Invoked Function Expression)

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

*/