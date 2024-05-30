import { Router } from "express";
import { createAdopted, deleteAdopted, getAdopted } from "../controllers/adopted.controller.js";
const router = Router();

router.post( '/', createAdopted)
router.get( '/', getAdopted)
router.delete( '/:id', deleteAdopted)

export default router