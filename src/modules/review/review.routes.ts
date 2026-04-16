import { Router } from "express";
import { ReviewController } from "./review.controller";
import { createReviewSchema } from "./review.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _ReviewController = new ReviewController();

router.post('/addReview', validate(createReviewSchema), authMiddleware, _ReviewController.addReview);
router.get('/:movie', authMiddleware, _ReviewController.findReviewsByMovie);

export default router;