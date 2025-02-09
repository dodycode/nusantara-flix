import "server-only";

import type { DiscoverAPIInput } from "@/validators/tmdb";
import dayjs from "@/lib/dayjs";

import type { DiscoverMovieResponse } from "./types/discover-movie";
import type { DiscoverTVShowsResponse } from "./types/discover-tv-show";
import {
  MoviesGenresEnum,
  MoviesSortByEnum,
  TVShowsGenresEnum,
  TVShowsSortByEnum,
} from "./enums";
import { fetchAPI, getDefaultFilters } from "./utils";

class TMDBApiService {
  public async discoverMovies(input: DiscoverAPIInput) {
    const page = input?.cursor ?? 1;
    const sortBy = input?.sortBy ?? MoviesSortByEnum.popularityDesc;
    const genres = input?.genres ?? [];

    const filters = getDefaultFilters(true);

    // set page
    filters.push(`page=${page}`);

    // set sort by
    filters.push(`sort_by=${sortBy}`);

    // set default genres
    if (!genres?.length) {
      const strGenres = Object.keys(MoviesGenresEnum).join("|");
      filters.push(`with_genres=${strGenres}`);
    } else {
      filters.push(`with_genres=${genres.join("|")}`);
    }

    // additional filters logic
    if (sortBy === MoviesSortByEnum.popularityDesc) {
      // make sure we get the latest popular movies
      const LastFiveMonths = dayjs()
        .subtract(5, "month")
        .startOf("month")
        .format("YYYY-MM-DD");

      filters.push(`release_date.gte=${LastFiveMonths}`);
      filters.push("vote_average.gte=5");
    }

    if (sortBy === MoviesSortByEnum.releaseDateDesc) {
      // make sure we get maximum next month shows
      const firstDayOfNextMonth = dayjs()
        .add(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");

      filters.push(`primary_release_date.lte=${firstDayOfNextMonth}`);
    }

    const res = await fetchAPI(`/discover/movie?${filters.join("&")}`);
    const resJson = (await res.json()) as DiscoverMovieResponse;

    return resJson;
  }

  public async discoverTVShows(input: DiscoverAPIInput) {
    const page = input?.cursor ?? 1;
    const sortBy = input?.sortBy ?? TVShowsSortByEnum.popularityDesc;
    const genres = input?.genres ?? [];

    const filters = getDefaultFilters();

    // set page
    filters.push(`page=${page}`);

    // set sort by
    filters.push(`sort_by=${sortBy}`);

    // set default genres
    if (!genres?.length) {
      const strGenres = Object.keys(TVShowsGenresEnum).join("|");
      filters.push(`with_genres=${strGenres}`);
    } else {
      filters.push(`with_genres=${genres.join("|")}`);
    }

    // additional filters logic
    if (sortBy === TVShowsSortByEnum.popularityDesc) {
      // make sure we get the latest popular shows
      const LastFiveMonths = dayjs()
        .subtract(5, "month")
        .startOf("month")
        .format("YYYY-MM-DD");

      filters.push(`first_air_date.gte=${LastFiveMonths}`);
      filters.push("vote_average.gte=5");
    }

    if (sortBy === TVShowsSortByEnum.releaseDateDesc) {
      // make sure we get maximum next month shows
      const firstDayOfNextMonth = dayjs()
        .add(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");

      filters.push(`air_date.lte=${firstDayOfNextMonth}`);
    }

    const res = await fetchAPI(`/discover/tv?${filters.join("&")}`);
    const resJson = (await res.json()) as DiscoverTVShowsResponse;

    return resJson;
  }
}

export const tmdbAPIService = new TMDBApiService();
