import Adopted from "../dao/mongo/models/adoptedModels.js";
import {uploadImage, deleteImage} from "../libs/cloudinary.js"
import fs from "fs-extra";

export const createAdopted = async (req, res) => {
    try {
        const { name } = req.body;
        let image;
        if (req.files.image) {
            const imageRes = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: imageRes.secure_url,
                public_id: imageRes.public_id
            }

        }

        const newAdopted = new Adopted({ name, image });
        await newAdopted.save();
        res.status(201).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getAdopted = async (req, res) => {
    try {
        const adopted = await Adopted.find();
        res.status(200).json(adopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const deleteAdopted = async (req, res) => {
    try {
        const { id } = req.params;
        const adopted = await Adopted.findByIdAndDelete(id);
        if (adopted.image.public_id) {
            await deleteImage(adopted.image.public_id)
        }
        res.status(200).json(adopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}