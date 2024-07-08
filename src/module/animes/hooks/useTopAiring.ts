import { useQuery } from "@tanstack/react-query";
import { getTopAiringAnimes } from "../service/animes.service";
import { ANIME } from "@/shared/query-keys/anime.enum";

export function useTopAiring() {
  return useQuery({
    queryKey: [ANIME.TOP_AIRING],
    queryFn: getTopAiringAnimes,
  });
}
