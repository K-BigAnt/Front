"use client";

import useSWR from "swr";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/app/utils/fetcher";

const Financial = dynamic(
  () => import("@/app/component/backtest/detail/Chart/Financial"),
  {
    ssr: false,
  }
);

const Pie = dynamic(() => import("@/app/component/backtest/detail/Chart/Pie"), {
  ssr: false,
});

function InitializeComponent() {
  const searchParams = useSearchParams();
  const portfolio = searchParams.get("portfolio");
  return <Initialize portfolio={portfolio ?? ""} />;
}

export default function Detail() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:80/v1/stock/price?symbol=000050&start_date=2024-04-01&end_date=2024-07-01",
    fetcher
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InitializeComponent />
      {typeof window !== "undefined" && <Pie />}
      {typeof window !== "undefined" && <Financial data={data.prices} />}
    </Suspense>
  );
}
