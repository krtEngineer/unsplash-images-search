import { useQuery } from "@tanstack/react-query";
import customFetch from "./CustomFetch";

export const useImageApi = (searchTxt) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", searchTxt],
    queryFn: async () => {
      const { data } = await customFetch.get(`${searchTxt}`);
      return data;
    },
  });
  return { isLoading, isError, data };
};
