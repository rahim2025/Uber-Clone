import {z} from "zod";

export const validateUserSchema = z.object({
    firstname : z.string().min(2,"Firstname require"),
    lastname  : z.string ().min(2,"Lastname required"),
    email: z.string().email("Invalid email"),
    password:z.string().min(6,"Minimum 6 character required")

})