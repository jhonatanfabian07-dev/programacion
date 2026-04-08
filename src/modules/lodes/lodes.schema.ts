import { z } from "zod";

export const createloDesSchema = z.object({
    name: z.string().min(4),
    done: z.boolean()
    
})
