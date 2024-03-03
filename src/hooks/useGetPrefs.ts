import useSWR from "swr";
import { fetcher } from "./fetcher";
export type PrefType = {
  prefCode: number;
  prefName: string;
};
export const useGetPrefs = () => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const { data, error, isLoading, isValidating } = useSWR(url, (url: string) =>
    fetcher(url, {
      // TODO: 環境変数から取得しているが、デプロイすると値までフロントエンドに公開されてしまうので、バックエンドで取得するなどの対策が必要
      "X-API-KEY": `${import.meta.env.VITE_RESAS_API_KEY}`,
    })
  );

  const result: PrefType[] = data?.result;
  return { result, error, isLoading, isValidating };
};
