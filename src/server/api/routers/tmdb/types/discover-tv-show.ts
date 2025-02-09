export interface DiscoverTVShows {
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date: string;
  genre_ids: number[];
  id: number;
}

export interface DiscoverTVShowsResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: DiscoverTVShows[];
}
