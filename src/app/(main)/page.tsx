import { PageContainer } from "./_components/page-container";
import { MovieCard } from "./movies/_components/movie-card";
import { TVShowCard } from "./tv/_components/tv-show-card";

export default function Home() {
  return (
    <PageContainer>
      <div className="popular-tv">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Popular Shows
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <TVShowCard key={index} />
          ))}
        </div>
      </div>

      <div className="top-rated-shows py-24">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Popular Movies
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <MovieCard key={index} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
