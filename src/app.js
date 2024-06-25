import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//? Add cors middleware setting
app.use(cors({
    origin : `${process.env.CORS_ORIGIN}`,
    credentials: true
}))

//? Limit the json file
app.use(express.json({limit: "1mb"}))

app.use(express.urlencoded({extended: true}));

//? For saving the static assets
app.use(express.static("public"))

export {app};