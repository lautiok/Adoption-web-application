import {z} from "zod";

 export const createNewsAdopted = z.object({
    mascotaid: z.string({
        required_error: "Mascota id is required",
    }),
    name: z.string(
        {
            required_error: "Name is required",
        }
    ), 
    email: z.string({ 
        required_error: "Email is required",
    }).email({
        message: "Must be a valid email"
    }),
    phone: z.string({
        required_error: "Phone is required",
    }),
    message: z.string({
        required_error: "Message is required",
    })
})