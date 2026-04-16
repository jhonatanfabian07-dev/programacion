import { Request, Response } from "express";
import { ReviewService } from "./review.service";

export class ReviewController {

    private _ReviewService = new ReviewService();

    addReview = async (req: Request, res: Response) => {

        const data = {
            ...req.body,
            movie: req.body.movie.toLowerCase() // recomendado
        };

        const result = await this._ReviewService.addReview(data);

        res.status(201).json(result)
    }

  findReviewsByMovie = async (req: Request, res: Response) => {

    const movie = req.params.movie as string; 

    if (!movie) {
        return res.status(400).json({ message: "movie es requerido" });
    }

    const result = await this._ReviewService.findReviewsByMovie(movie.toLowerCase());

    res.status(200).json(result)
}

}