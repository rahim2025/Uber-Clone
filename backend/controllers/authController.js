import { genToken } from "../lib/genToken.js";
import User from "../Models/userModel.js";

export const signup = async (req,res,next)=>{
    const userData = req.userDate;
    const findUser = User.findOne({email:userData.email});
    if(findUser){
        return res.status(400).json({
            message : "User already exist"
        });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password,salt);

    const newUser = new User ({
        firstname:userData.firstname,
        lastname:userData.lastname,
        email:userData.email,
        password:hashedPassword
    })

    await newUser.save();
    return res.status(200).json({
        message:"Signup successfully"
    })


}

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
    const findUser = await User.findOne({email:email});
    if(!findUser){
        return res.status(400).json({
            message:"Wrong Credentials"
        })
    }
    const checkPassword = bcrypt.compare(password,User.password);
    if(!checkPassword){
        return res.status(400).json({
            message:"Wrong Credentials"
        })
    }
    genToken(findUser._id,res);
    res.status(200).json({
      email:findUser.email  
    })
    } catch (error) {
        console.log("Error in login controller",error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
    
    
    
}
export const logout = async (req,res) =>{
    try {
        res.cookie("jwt","",{
            maxAge:0
        })
        res.status(200).json({
            message:"Logout successfully"
        })
    } catch (error) {
        console.log("Error in logout controller",error)
        res.status(401).json({
            message:"Internal server error"
        });
    }
}


