import mongoose from "mongoose";

const { Schema } = mongoose;

const adoptSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        url: String,
        public_id: String
    },
    status : {
        type: String,
        default: 'adopcion'
    }
})

export default mongoose.model('Adopt', adoptSchema)