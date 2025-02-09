import Image from "next/image";
import Link from "next/link";

import type { DiscoverTVShows } from "@/server/api/routers/tmdb/types/discover-tv-show";
import CldImage from "@/components/cld-image";
import { Icon } from "@/components/ui/icons";
import dayjs from "@/lib/dayjs";
import { tvShowsGenresArray } from "@/server/api/routers/tmdb/enums";

type Props = {
  show: DiscoverTVShows;
};

const TVShowCard: React.FC<Props> = ({ show }) => {
  const genresSet = new Set(show.genre_ids);

  const filteredGenres = tvShowsGenresArray.filter((genre) =>
    genresSet.has(genre.id),
  );

  return (
    <div className="mt-8">
      <Link href={`tv/${show.id}`}>
        <div className="relative h-[350px] w-full overflow-hidden">
          <CldImage
            src={`https://image.tmdb.org/t/p/w400${show.poster_path}`}
            alt={`${show.name} poster`}
            className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
            sizes="400px"
            fill
            showloading
          />
        </div>
      </Link>
      <div className="mt-2">
        <Link
          href={`/tv/${show.id}`}
          className="mt-2 text-lg hover:text-gray-300"
        >
          {show.name}
        </Link>
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <Icon type="star" />
          <span className="ml-1">{show.vote_average || "N/A"}</span>
          <span className="mx-2">|</span>
          <span>{dayjs(show.first_air_date).format("YYYY")}</span>
        </div>
        <div className="text-sm text-gray-400">
          {filteredGenres.length > 0
            ? filteredGenres.map((genre) => genre.genre).join(", ")
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export { TVShowCard };
