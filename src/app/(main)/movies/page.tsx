import { api, HydrateClient } from "@/trpc/server";

import { PageContainer } from "../_components/page-container";
import { MovieCard } from "./_components/movie-card";

export const fetchCache = "default-cache";
// after 1 day
export const revalidate = 86400;

export default async function Movies() {
  // Sort by popularity for movies by default
  const movies = await api.tmdb.discoverMovies();

  return (
    <HydrateClient>
      <PageContainer className="mb-16">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
            Movies
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {movies.results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </PageContainer>
    </HydrateClient>
  );
}
