import { ObjectId } from "mongodb";
import { ReviewRepository } from "./review.repository";
import { Review } from "./review.model";

export class ReviewService {

    private repository = new ReviewRepository();

    async addReview(data: Review) {
        return this.repository.create(data);
    }

    async findReviewsByMovie(movie: string) {
        return this.repository.findReviewsByMovie(movie);
    }

    async updateReview(id: string, data: Partial<Review>) {

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.updateReview(
            new ObjectId(id),
            data
        );
    }

    async deleteReview(id: string) {

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.deleteReview(
            new ObjectId(id)
        );
    }
}