import {Router} from "express";
import { login, logout, profile, register, verifyToken } from "../controllers/auth.controller.js";
import { validatorSchema } from "../middleware/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schemas.js";
import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.post('/login', validatorSchema(loginSchema), login)
router.post('/register', validatorSchema(registerSchema), register )
router.post('/logout', logout )
router.get('/profile', authRequired, profile )
router.get("/verify", verifyToken);

export default router