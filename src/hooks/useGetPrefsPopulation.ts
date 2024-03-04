import useSWR from "swr";
import { fetcher } from "./fetcher";
type PopulationType = {
  data: {
    year: number;
    value: number;
  }[];
};
type ResponseType = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationType[];
  };
};
export const useGetPrefsPopulation = (prefCodes: number[]) => {
  const { data, error, isLoading, isValidating } = useSWR(
    prefCodes,
    (prefCodes: number[]) =>
      Promise.all(
        prefCodes.map((prefCode) => {
          const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
          return fetcher(url, {
            "X-API-KEY": `${import.meta.env.VITE_RESAS_API_KEY}`,
          });
        })
      )
  );
  const results = data as ResponseType[];
  return { results, error, isLoading, isValidating };
};
