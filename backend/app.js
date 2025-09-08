import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";

const app = express();
import authRouter from "./routes/authRouter.js"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post("/auth",authRouter)

export default app;