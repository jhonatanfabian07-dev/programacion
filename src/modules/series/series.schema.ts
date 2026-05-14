import { z } from "zod";

export const createSeriesSchema = z.object({
    name: z.string().min(2),
    genre: z.string().min(3),
    seasons: z.number().min(1),
    rating: z.number().min(1).max(10)
});

export const updateSeriesSchema = z.object({
    name: z.string().min(2).optional(),
    genre: z.string().min(3).optional(),
    seasons: z.number().min(1).optional(),
    rating: z.number().min(1).max(10).optional()
});