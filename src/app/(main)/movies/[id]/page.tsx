import { notFound } from "next/navigation";

import { api } from "@/trpc/server";

import { MovieCasts } from "./_components/movie-casts";
import { MovieImages } from "./_components/movie-images";
import { MovieInfo } from "./_components/movie-info";

export const fetchCache = "default-cache";
// after 1 month
export const revalidate = 2628000;

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsId = (await params).id;
  if (!paramsId) notFound();

  const movie = await api.tmdb.movieDetails(Number(paramsId));

  return (
    <div className="flex flex-col">
      <MovieInfo movie={movie} />
      <MovieCasts casts={movie.credits.cast} />
      <MovieImages images={movie.images.backdrops} />
    </div>
  );
}
