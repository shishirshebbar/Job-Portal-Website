import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./utilities/database.js";
import userroute from "./routes/user_routes.js"
import companyroute from "./routes/comapny_route.js"
import jobroute from "./routes/job_routes.js"
import applicationroute from "./routes/application_routes.js"
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
app.use("/api/v1/user",userroute);
app.use("/api/v1/company",companyroute);
app.use("/api/v1/job",jobroute);
app.use("/api/v1/application",applicationroute);

app.listen(PORT,()=>{
    connect();
    console.log(`Server listening on PORT ${PORT}`);
})