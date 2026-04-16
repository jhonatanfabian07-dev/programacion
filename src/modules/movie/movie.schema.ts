import { z } from "zod";

export const createMovieSchema = z.object({
    name: z.string().min(2),
    genre: z.string().min(3),
    rating: z.number().min(1).max(10)
});