import {z} from "zod";

export const createNAdopted = z.object({
    name: z.string(
        {
            required_error: "Name is required",
        }
    ), 
    image : z.string({
        required_error: "Image is required",
    })
})
