import { api, HydrateClient } from "@/trpc/server";

import { PageContainer } from "./_components/page-container";
import { MovieCard } from "./movies/_components/movie-card";
import { TVShowCard } from "./tv/_components/tv-show-card";

export const fetchCache = "default-cache";
// after 1 day
export const revalidate = 86400;

export default async function Home() {
  const [popularShows, popularMovies] = await Promise.all([
    api.tmdb.discoverTVShows(),
    api.tmdb.discoverMovies(),
  ]);

  const topPopularShows = popularShows.results.splice(0, 5);
  const topPopularMovies = popularMovies.results.splice(0, 5);

  return (
    <HydrateClient>
      <PageContainer>
        <div className="popular-tv">
          <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
            Popular Shows
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {topPopularShows.map((show) => (
              <TVShowCard show={show} key={show.id} />
            ))}
          </div>
        </div>

        <div className="top-rated-shows py-24">
          <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
            Popular Movies
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {topPopularMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </PageContainer>
    </HydrateClient>
  );
}
