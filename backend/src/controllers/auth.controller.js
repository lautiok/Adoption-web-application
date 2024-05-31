import User from "../dao/mongo/models/usersModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // En producción, solo enviar la cookie en HTTPS
    sameSite: 'strict', // Ajusta según tus necesidades, 'lax' o 'none' si tu aplicación necesita enviar cookies en contextos de terceros
    maxAge: 24 * 60 * 60 * 1000 // 1 día
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();

        const token = await createAccessToken({ id: savedUser._id });
        res.cookie("token", token, cookieOptions);
        res.json({
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            password: savedUser.password
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token, cookieOptions);
        res.json({
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            password: userFound.password
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout =  (req, res) => {
    res.cookie("token", "", {
        expires: new Date(Date.now(5000)),
    })
    return res.sendStatus(200)
}

export const profile =  async (req, res) => {
   const userfaund = await User.findById(req.user.id)

    if (!userfaund) return res.status(400).json({message: "user not found"})
    return res.json({
        id: userfaund._id,
        name: userfaund.name,
        email: userfaund.email,
    })
}

export const verifyToken = async (req, res) => {
    const token = req.cookies?.token;
    if (!token) return res.send(false);

    jwt.verify(token, process.env.JWT_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);

        return res.json({
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
        });
    });
};