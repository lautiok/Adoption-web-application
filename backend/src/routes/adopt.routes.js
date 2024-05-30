import { Router } from "express";
import { createAdopt, deleteAdopt, getAdopt, getAdopts, updateAdopt } from "../controllers/adopt.controller.js";

const router = Router();

router.post('/', createAdopt);
router.get('/:id', getAdopt);
router.get('/', getAdopts);
router.put('/:id', updateAdopt);
router.delete('/:id', deleteAdopt);

export default router;
