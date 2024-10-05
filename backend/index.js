import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./utilities/database.js";

dotenv.config({});
const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const cross_origin = {
    origin:"http://localhost:5713",
    credentials : true
}
app.use(cors(cross_origin));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    connect();
    console.log(`Server listening on PORT ${PORT}`);
})