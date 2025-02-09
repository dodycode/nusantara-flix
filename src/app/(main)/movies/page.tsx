import { PageContainer } from "../_components/page-container";
import { MovieCard } from "./_components/movie-card";

export default function Movies() {
  return (
    <PageContainer className="mb-16">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Movies
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCard key={index} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
