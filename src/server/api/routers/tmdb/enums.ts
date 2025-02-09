export const TVShowsGenresEnum = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western",
} as const;

export const tvShowsGenresArray = Object.entries(TVShowsGenresEnum).map(
  ([key, value]) => ({
    id: Number(key), // Convert key to a number
    genre: value,
  }),
);

export type TVShowsGenresEnum =
  (typeof TVShowsGenresEnum)[keyof typeof TVShowsGenresEnum];

export const TVShowsSortByEnum = {
  popularityDesc: "popularity.desc",
  popularityAsc: "popularity.asc",
  voteCountDesc: "vote_count.desc",
  voteCountAsc: "vote_count.asc",
  releaseDateDesc: "first_air_date.desc",
  releaseDateAsc: "first_air_date.asc",
} as const;
export type TVShowsSortByEnum =
  (typeof TVShowsSortByEnum)[keyof typeof TVShowsSortByEnum];

export const MoviesSortByEnum = {
  popularityDesc: "popularity.desc",
  popularityAsc: "popularity.asc",
  voteCountDesc: "vote_count.desc",
  voteCountAsc: "vote_count.asc",
  revenueDesc: "revenue.desc",
  revenueAsc: "revenue.asc",
  releaseDateDesc: "primary_release_date.desc",
  releaseDateAsc: "primary_release_date.asc",
} as const;
export type MoviesSortByEnum =
  (typeof MoviesSortByEnum)[keyof typeof MoviesSortByEnum];

export const MoviesGenresEnum = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
} as const;

export const moviesGenresArray = Object.entries(MoviesGenresEnum).map(
  ([key, value]) => ({
    id: Number(key), // Convert key to a number
    genre: value,
  }),
);

export type MoviesGenresEnum =
  (typeof MoviesGenresEnum)[keyof typeof MoviesGenresEnum];
