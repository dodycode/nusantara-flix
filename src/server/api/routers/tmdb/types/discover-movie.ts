export interface DiscoverMovie {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  id: number;
}

export interface DiscoverMovieResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: DiscoverMovie[];
}
