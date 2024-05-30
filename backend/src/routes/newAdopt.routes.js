import { Router } from "express";
import { createNewAdopted, deleteNewAdopted, getNewAdopted } from "../controllers/newAdopted.controller.js";

const router = Router();

router.post('/', createNewAdopted);
router.get('/', getNewAdopted );
router.delete('/:id', deleteNewAdopted );


export default router