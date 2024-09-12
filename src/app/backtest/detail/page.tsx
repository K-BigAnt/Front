"use client";

import Initialize from "./Initialize";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/app/utils/fetcher";

const Financial = dynamic(() => import("../../component/Chart/Financial"), {
  ssr: false,
});

const Pie = dynamic(() => import("../../component/Chart/Pie"), {
  ssr: false,
});

export default function BacktestDetailPage() {
  const searchParams = useSearchParams();
  const portfolio = searchParams.get("portfolio");
  const { data, error, isLoading } = useSWR(
    "http://localhost:80/v1/stock/price?symbol=000050&start_date=2024-04-01&end_date=2024-07-01",
    fetcher
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {portfolio}
      <Initialize portfolio={portfolio ?? ""} />
      {typeof window !== "undefined" && <Pie />}
      {typeof window !== "undefined" && (
        <Financial data={DataToFinancial(data.prices)} />
      )}
    </div>
  );
}

const DataToFinancial = (prices: any) => {
  const data = prices.map((price: any) => {
    const timestamp = new Date(
      price.date.slice(0, 4) +
        "-" +
        price.date.slice(4, 6) +
        "-" +
        price.date.slice(6, 8)
    ).getTime();
    return [timestamp, parseFloat(price.closePrice)];
  });
  return data.reverse();
};
