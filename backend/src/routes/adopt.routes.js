import { Router } from "express";
import { createAdopt, deleteAdopt, getAdopt, getAdopts, updateAdopt } from "../controllers/adopt.controller.js";
import { validatorSchema } from "../middleware/validator.middleware.js";
import { createPets } from "../schemas/pets.schemas.js";

const router = Router();

router.post('/', validatorSchema(createPets), createAdopt);
router.get('/:id', getAdopt);
router.get('/', getAdopts);
router.put('/:id',  updateAdopt);
router.delete('/:id', deleteAdopt);

export default router;
