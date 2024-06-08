import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const {MONGO_URL, MONGO_URL_TEST, NODE_ENV} = process.env

const database = NODE_ENV === 'test' ? MONGO_URL_TEST : MONGO_URL

export const connect = async () => {
    try {
        await mongoose.connect(database)
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}