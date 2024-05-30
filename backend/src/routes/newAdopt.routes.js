import { Router } from "express";
import { createNewAdopted, deleteNewAdopted, getNewAdopted } from "../controllers/newAdopted.controller.js";
import { validatorSchema } from "../middleware/validator.middleware.js";
import { createNewsAdopted } from "../schemas/newAdopt.schemas.js";

 const router = Router();

router.post('/', validatorSchema(createNewsAdopted), createNewAdopted);
router.get('/', getNewAdopted );
router.delete('/:id', deleteNewAdopted );


export default router