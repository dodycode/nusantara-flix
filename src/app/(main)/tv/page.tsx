import { TVShowsSortByEnum } from "@/server/api/routers/tmdb/enums";
import { api, HydrateClient } from "@/trpc/server";

import { PageContainer } from "../_components/page-container";
import { TVShowCard } from "./_components/tv-show-card";

export const fetchCache = "default-cache";
// after 1 day
export const revalidate = 86400;

export default async function TVShows() {
  const tvShows = await api.tmdb.discoverTVShows({
    sortBy: TVShowsSortByEnum.releaseDateDesc,
  });

  return (
    <HydrateClient>
      <PageContainer className="mb-16">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
            TV Shows
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {tvShows.results.map((show) => (
              <TVShowCard show={show} key={show.id} />
            ))}
          </div>
        </div>
      </PageContainer>
    </HydrateClient>
  );
}
