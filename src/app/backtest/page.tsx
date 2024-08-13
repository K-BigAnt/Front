"use client";

import React from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import useSWR from "swr";

const Financial = dynamic(() => import("../component/Chart/Financial"), {
  ssr: false,
});

const Pie = dynamic(() => import("../component/Chart/Pie"), {
  ssr: false,
});

export default function BacktestPage() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "http://localhost:80/v1/stock/price?symbol=000050&start_date=2024-04-01&end_date=2024-07-01",
    fetcher
  );

  console.log(data);
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {typeof window !== "undefined" && <Pie />}
      {typeof window !== "undefined" && <Financial />}
    </div>
  );
}
