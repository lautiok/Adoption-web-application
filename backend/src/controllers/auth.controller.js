import User from "../dao/mongo/models/usersModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";

const cookieOptions = {
    domain: "adoption-web-application.vercel.app", // Cambia esto al dominio que desees
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hora de expiración
    secure: true,
    httpOnly: true,
    sameSite: 'Strict'
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

        const token = await createAccessToken({
            id: savedUser._id
        });

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

        const token = await createAccessToken({
            id: userFound._id,
        });

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

export const logout = (req, res) => {
    res.cookie("token", "", {
        ...cookieOptions,
        expires: new Date(Date.now()), 
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: "User not found" });
    return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
    });
};

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