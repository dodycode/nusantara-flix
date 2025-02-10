import type { MovieDetails } from "@/server/api/routers/tmdb/types/movie-details";
import CldImage from "@/components/cld-image";
import { FullscreenVideo } from "@/components/fullscreen-video";
import { Icon } from "@/components/ui/icons";
import dayjs from "@/lib/dayjs";

type Props = {
  movie: MovieDetails;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750";

  return (
    <div className="movie-info border-b border-gray-800">
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row">
        <div className="flex-none">
          <div className="relative h-[400px] w-64 lg:h-[calc(100dvh-200px)] lg:w-96">
            <CldImage
              src={posterPath}
              alt={`${movie.title} Poster`}
              className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
              sizes="500px"
              fill
              priority
              showloading
            />
          </div>
        </div>
        <div className="md:ml-24">
          <h2 className="mt-4 mb-2 text-4xl font-semibold md:mt-0">
            {movie.title}
          </h2>
          <div className="flex flex-wrap items-center text-sm text-gray-400">
            <Icon type="star" />
            <span className="ml-1">{movie.vote_average}</span>
            <span className="mx-2">|</span>
            <span>{dayjs(movie.release_date).format("YYYY")}</span>
            <span className="mx-2">|</span>
            <span>{movie.genres.map((genre) => genre.name).toString()}</span>
          </div>

          <p className="mt-8 text-gray-300">{movie.overview}</p>

          <div className="mt-12">
            <h4 className="font-semibold text-white">Featured Crew</h4>
            <div className="mt-4 flex">
              {movie.credits.crew.slice(0, 3).map((crew, index) => (
                <div key={`${index}-${crew.name}`} className="mr-8">
                  <div>{crew.name}</div>
                  <div className="text-sm text-gray-400">{crew.job}</div>
                </div>
              ))}
            </div>
          </div>

          {movie.videos.results.length > 0 &&
          movie.videos.results[0]?.site &&
          movie.videos.results[0]?.key ? (
            <div className="mt-12">
              <FullscreenVideo
                urlSite={movie.videos.results[0].site}
                url={movie.videos.results[0].key}
                btnText="Play Trailer"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { MovieInfo };
