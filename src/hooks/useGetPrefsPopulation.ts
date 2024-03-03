import useSWR from "swr";
import { fetcher } from "./fetcher";
type PopulationType = {
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
};
export const useGetPrefsPopulation = (prefCode: number) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
  const { data, error, isLoading, isValidating } = useSWR(url, (url: string) =>
    fetcher(url, {
      "X-API-KEY": `${import.meta.env.VITE_RESAS_API_KEY}`,
    })
  );
  const result: PopulationType = data?.result;
  return { result, error, isLoading, isValidating };
};
