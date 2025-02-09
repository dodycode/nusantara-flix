import { MovieCasts } from "./_components/movie-casts";
import { MovieImages } from "./_components/movie-images";
import { MovieInfo } from "./_components/movie-info";

export default function MovieDetails() {
  return (
    <div className="flex flex-col">
      <MovieInfo />
      <MovieCasts />
      <MovieImages />
    </div>
  );
}
