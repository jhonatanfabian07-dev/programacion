import { Router } from "express";
import { MovieController } from "./movie.controller";
import { createMovieSchema } from "./movie.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new MovieController();

router.post('/movies', validate(createMovieSchema), authMiddleware, controller.addMovie);
router.get('/movies', authMiddleware, controller.findAllMovies);

export default router;