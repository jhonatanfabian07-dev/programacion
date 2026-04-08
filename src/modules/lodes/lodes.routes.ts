import { Router } from "express";
import { LoDesController } from "./lodes.controller";
import { createloDesSchema  } from "./lodes.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();
const _LoDesController = new LoDesController();

router.post('/addloDes', validate(createloDesSchema),authMiddleware, _LoDesController.addloDes);
router.get('/', authMiddleware, _LoDesController.findAllLoDes);

export default router;