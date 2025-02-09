import "server-only";

import { env } from "@/env";

// TMDB API v3
// I'm not using v4 yet because it's still not stable
const baseURL = "https://api.themoviedb.org/3";

export const fetchAPI = async (url: string) => {
  const token = env.TMDB_API_KEY;
  if (!token) throw new Error("No token provided");

  if (!url) throw new Error("No endpoint URL provided");

  const response = await fetch(`${baseURL}${url}`, {
    // We are only doing GET requests for now
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getDefaultFilters = (movie?: boolean) => {
  const strParams = [];

  strParams.push(`language=en-US`);
  strParams.push(`include_adult=false`);
  strParams.push(`with_original_language=id`);

  if (movie) {
    strParams.push(`include_video=true`);
  }

  return strParams;
};
