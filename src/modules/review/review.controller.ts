import { Request, Response } from "express";
import { ReviewService } from "./review.service";
import { Review } from "./review.model";

export class ReviewController {

    private service = new ReviewService();

    addReview = async (req: Request, res: Response) => {

        try {

            const data: Review = {
                ...req.body,
                movie: req.body.movie.toLowerCase()
            };

            const result = await this.service.addReview(data);

            res.status(201).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    findReviewsByMovie = async (req: Request, res: Response) => {

        try {

            const movie = req.params.movie as string;

            const result = await this.service.findReviewsByMovie(
                movie.toLowerCase()
            );

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    updateReview = async (req: Request, res: Response) => {

        try {

            const id = req.params.id as string;

            const result = await this.service.updateReview(id, req.body);

            if (!result) {
                return res.status(404).json({
                    message: "Review no encontrada"
                });
            }

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    deleteReview = async (req: Request, res: Response) => {

        try {

            const id = req.params.id as string;

            const result = await this.service.deleteReview(id);

            if (!result.deleted) {
                return res.status(404).json({
                    message: "Review no encontrada"
                });
            }

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }
}