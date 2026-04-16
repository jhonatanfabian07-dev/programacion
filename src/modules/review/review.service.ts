import { ReviewRepository } from "./review.repository";

export class ReviewService {

    private repository = new ReviewRepository();

    async addReview(data: any) {
        return this.repository.create(data);
    }

    async findReviewsByMovie(movie: string) {
        return this.repository.findReviewsByMovie(movie);
    }

}