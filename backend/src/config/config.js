import dotenv from "dotenv"

dotenv.config()

const config = {
    port: process.env.PORT,
    mongo: process.env.MONGO_URL,
    CLOUDINARYNAME: process.env.CLOUDINARY_NAME,
    CLOUDINARYKEY: process.env.CLOUDINARY_KEY,
    CLOUDINARYSECRET: process.env.CLOUDINARY_SECRET,
    origin: process.env.ORIGIN

}

export default config