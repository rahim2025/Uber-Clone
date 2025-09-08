import User from "../Models/userModel";

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
}