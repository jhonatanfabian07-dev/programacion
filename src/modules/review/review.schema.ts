import { z } from "zod";

export const createReviewSchema = z.object({
    movie: z.string().min(2),
    comment: z.string().min(3)
});

export const updateReviewSchema = z.object({
    movie: z.string().min(2).optional(),
    comment: z.string().min(3).optional()
});