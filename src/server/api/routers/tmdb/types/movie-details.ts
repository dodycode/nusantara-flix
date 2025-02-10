import type { Cast } from "./cast";
import type { Crew } from "./crew";
import type { Genre } from "./genre";
import type { Image } from "./image";
import type { Video } from "./video";

export interface MovieDetails {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genres: Genre[];
  overview: string;
  credits: {
    crew: Crew[];
    cast: Cast[];
  };
  images: {
    backdrops: Image[];
  };
  videos: {
    results: Video[];
  };
}
