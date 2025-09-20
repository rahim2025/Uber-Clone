import jwt from 'jsonwebtoken';

export const genToken = (userId,res) =>{
    const token = jwt.sign({userId},process.env.secret,{
        expiresIn:"7d"
    })

res.cookie("jwt",token,{
    maxAge:7*24*60*60,
    httpOnly:true
});

return token;

}
