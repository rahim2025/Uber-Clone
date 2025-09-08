import express from "express";
const router = express.Router();

import  {userValidator} from "../middlewares/userValidate.middleware.js";


router.post("/signup",userValidator)

export default router ;