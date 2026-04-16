import { z } from "zod";

export const createReviewSchema = z.object({
    movie: z.string().min(2),
    comment: z.string().min(3)
});