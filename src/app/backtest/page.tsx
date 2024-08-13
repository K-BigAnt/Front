"use client";

import React from "react";
import dynamic from "next/dynamic";

const FinancialChart = dynamic(
  () => import("../component/Chart/FinancialChart"),
  {
    ssr: false,
  }
);

const Pie = dynamic(() => import("../component/Chart/Pie"), {
  ssr: false,
});

export default function BacktestPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {typeof window !== "undefined" && <Pie />}
      {typeof window !== "undefined" && <FinancialChart />}
    </div>
  );
}
