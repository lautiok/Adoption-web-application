import mongoose from "mongoose"
import config from "../../config/config.js"

export const connect = async () => {
    try {
        await mongoose.connect(config.mongo, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}