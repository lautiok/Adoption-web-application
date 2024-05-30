import Adopt from "../dao/mongo/models/adoptModels.js";
import {uploadImage, deleteImage} from "../libs/cloudinary.js"
import fs from "fs-extra";
export const createAdopt = async (req, res) => {
    try {
        const { name, age, gender, type, description, status } = req.body;
        let image;
        if (req.files.image) {
            const imageRes = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: imageRes.secure_url,
                public_id: imageRes.public_id
            }

            
        }

        const newAdopt = new Adopt({ name, age, gender, type, description, status, image });
        await newAdopt.save();
        res.status(201).json(newAdopt);
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

export const getAdopts = async (req, res) => {
    try {
        const adopt = await Adopt.find();
        res.status(200).json(adopt);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAdopt = async (req, res) => {
    try {
        const { id } = req.params;
        const adopt = await Adopt.findById(id);
        res.status(200).json(adopt);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateAdopt = async (req, res) => {
    try {
        const { name, age, gender, type, description, status } = req.body;
        const { id } = req.params;
        const updatedFields = { name, age, gender, type, description, status };
        const adopt = await Adopt.findByIdAndUpdate(id, updatedFields, { new: true });
        res.status(200).json(adopt);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteAdopt = async (req, res) => {
    try {
        const { id } = req.params;
        const adopt = await Adopt.findByIdAndDelete(id);
        if (adopt.image.public_id) {
            await deleteImage(adopt.image.public_id)
        } 
        res.status(200).json(adopt);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
