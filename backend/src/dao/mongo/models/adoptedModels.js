import mongoose from "mongoose";

const { Schema } = mongoose;

const adoptedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image : {
        url: String,
        public_id: String
    }
})

export default mongoose.model("Adopted", adoptedSchema)