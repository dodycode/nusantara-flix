import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { DiscoverAPISchema } from "@/validators/tmdb";

import { tmdbAPIService } from "./tmdb.service";

export const tmdbRouter = createTRPCRouter({
  discoverMovies: publicProcedure
    .input(DiscoverAPISchema)
    .query(async ({ input }) => {
      const response = await tmdbAPIService.discoverMovies(input);
      return response;
    }),
  discoverTVShows: publicProcedure
    .input(DiscoverAPISchema)
    .query(async ({ input }) => {
      const response = await tmdbAPIService.discoverTVShows(input);
      return response;
    }),
  movieDetails: publicProcedure.input(z.number()).query(async ({ input }) => {
    const response = await tmdbAPIService.movieDetails(input);
    return response;
  }),
});
