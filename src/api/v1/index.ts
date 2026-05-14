import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import MovieRouter from "../../modules/movie/movie.routes";
import ReviewRouter from "../../modules/review/review.routes";
import SeriesRouter from "../../modules/series/series.routes";

const router = Router();


router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/movies', MovieRouter);
router.use('/reviews', ReviewRouter);
router.use('/series', SeriesRouter);

export default router;