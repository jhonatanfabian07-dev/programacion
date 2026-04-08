import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import lodesRouter from "../../modules/lodes/lodes.routes";

const router = Router();


router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/lodes', lodesRouter);

export default router;