import {z} from "zod";

 export const createPets = z.object({
    name: z.string(
        {
            required_error: "Name is required",
        }
    ), 
    age : z.string({
        required_error: "Age is required",
    }),
    gender : z.string({
        required_error: "Gender is required",
    }),
    type : z.string({
        required_error: "Type is required",
    }),
    description : z.string({
        required_error: "Description is required",
    }),
    image : z.string({
        required_error: "Image is required",
    }),
})
