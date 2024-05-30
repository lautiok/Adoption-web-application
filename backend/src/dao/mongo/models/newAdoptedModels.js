import mongoose from "mongoose";

const { Schema } = mongoose;

const newAdoptedSchema = new Schema({
    mascotaid: {
        type: Schema.Types.ObjectId,
        ref: "Adopt",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
})

export default mongoose.model("NewAdopted", newAdoptedSchema)