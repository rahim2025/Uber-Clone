import { validateUserSchema } from "../lib/validateUserSchema.js"
export const userValidator = (req,res,next) =>{
    const parseResult = validateUserSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).json({
            error : parseResult.error.format()    
        })
    }
    req.userData = parseResult.data;
    next();
} 