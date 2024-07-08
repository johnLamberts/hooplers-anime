import axios, { AxiosError } from "axios";

async function getRecentAnimes() {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_HOOPLERS_ANIME_API
      }anime/gogoanime/recent-episodes`
    );

    return response;
  } catch (err) {
    if (err instanceof Error || err instanceof AxiosError)
      throw new Error(err.message);
  }
}

async function getTopAiringAnimes() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_HOOPLERS_ANIME_API}anime/gogoanime/top-airing`
    );

    return response;
  } catch (err) {
    if (err instanceof Error || err instanceof AxiosError)
      throw new Error(err.message);
  }
}

export { getRecentAnimes, getTopAiringAnimes };
