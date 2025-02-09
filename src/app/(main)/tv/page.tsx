import { PageContainer } from "../_components/page-container";
import { TVShowCard } from "./_components/tv-show-card";

export default function TVShows() {
  return (
    <PageContainer className="mb-16">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          TV Shows
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <TVShowCard key={index} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
