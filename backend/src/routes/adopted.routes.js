import { Router } from "express";
import { createAdopted, deleteAdopted, getAdopted } from "../controllers/adopted.controller.js";
import { validatorSchema } from "../middleware/validator.middleware.js";
import { createNAdopted } from "../schemas/adopted.schemas.js";
const router = Router();

router.post( '/', validatorSchema(createNAdopted), createAdopted)
router.get( '/', getAdopted)
router.delete( '/:id', deleteAdopted)

export default router