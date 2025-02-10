import Link from "next/link";

import type { DiscoverMovie } from "@/server/api/routers/tmdb/types/discover-movie";
import CldImage from "@/components/cld-image";
import { Icon } from "@/components/ui/icons";
import dayjs from "@/lib/dayjs";
import { moviesGenresArray } from "@/server/api/routers/tmdb/enums";

type Props = {
  movie: DiscoverMovie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
    : "https://placehold.co/400x350.png";

  const genresSet = new Set(movie.genre_ids);

  const filteredGenres = moviesGenresArray.filter((genre) =>
    genresSet.has(genre.id),
  );

  return (
    <div className="mt-8">
      <Link href={`movies/${movie.id}`}>
        <div className="relative h-[350px] w-full overflow-hidden">
          <CldImage
            src={posterPath}
            alt={`${movie.title} poster`}
            className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
            sizes="400px"
            fill
            showloading
          />
        </div>
      </Link>
      <div className="mt-2">
        <Link
          href={`/movies/${movie.id}`}
          className="mt-2 text-lg hover:text-gray-300"
        >
          {movie.title}
        </Link>
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <Icon type="star" />
          <span className="ml-1">{movie.vote_average || "N/A"}</span>
          <span className="mx-2">|</span>
          <span>{dayjs(movie.release_date).format("YYYY")}</span>
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

export { MovieCard };
