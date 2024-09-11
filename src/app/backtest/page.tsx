"use client";

import { useRouter } from "next/navigation";

export default function BacktestPage() {
  const router = useRouter();

  const portfolio = [
    "레이달리오 포트폴리오",
    "그레그 포트폴리오",
    "프리가바 포트폴리오",
    "필라인 포트폴리오",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 text-center">
      <div className="flex flex-row items-center justify-center gap-x-10 text-center">
        {portfolio.map((portfolio) => (
          <div
            key={portfolio}
            className="w-[200px] h-[200px] border-2 border-black"
            onClick={() => {
              router.push(`/backtest/detail?portfolio=${portfolio}`);
            }}
          >
            {portfolio}
          </div>
        ))}
      </div>
    </div>
  );
}
