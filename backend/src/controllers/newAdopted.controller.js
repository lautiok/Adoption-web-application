import NewAdopted from "../dao/mongo/models/newAdoptedModels.js";


export const createNewAdopted = async (req, res) => {
    try {
        const { name, email, phone, message, mascotaid } = req.body;
        const newAdopted = new NewAdopted({ name, email, phone, message, mascotaid });
        await newAdopted.save();
        res.status(201).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getNewAdopted = async (req, res) => {
    try {
        const newAdopted = await NewAdopted.find();
        res.status(200).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteNewAdopted = async (req, res) => {
    try {
        const { id } = req.params;
        const newAdopted = await NewAdopted.findByIdAndDelete(id);
        res.status(200).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}