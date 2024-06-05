import { ANIME } from "@/shared/query-keys/anime.enum";
import { useQuery } from "@tanstack/react-query";
import { getRecentAnimes } from "../service/animes.service";

export function useRecentAnimes() {
  return useQuery({
    queryKey: [ANIME.RECENT_ANIME],
    queryFn: getRecentAnimes,
  });
}
