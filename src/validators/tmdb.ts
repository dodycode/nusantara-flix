import { z } from "zod";

export const DiscoverAPISchema = z
  .object({
    cursor: z.number().optional().default(1),
    sortBy: z.string().nullable().optional(),
    genres: z.array(z.number()).nullable().optional(),
  })
  .optional();

export type DiscoverAPIInput = z.infer<typeof DiscoverAPISchema>;
