import express from "express";
const router = express.Router();

import  {userValidator} from "../middlewares/userValidate.middleware.js";
import { signup,login,logout } from "../controllers/authController.js";


router.post("/signup",userValidator,)
router.post("/login",userValidator)
router.post("/logout",userValidator)



export default router ;