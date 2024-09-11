"use client";

import { useRouter } from "next/navigation";

export default function BacktestPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 text-center">
      <div className="flex flex-row items-center justify-center gap-x-10 text-center">
        <div
          className="w-[200px] h-[200px] border-2 border-black"
          onClick={() => {
            router.push("/backtest/detail?portfolio=레이달리오 포트폴리오");
          }}
        >
          레이달리오 포트폴리오
        </div>
        <div
          className="w-[200px] h-[200px] border-2 border-black"
          onClick={() => {
            router.push("/backtest/detail?portfolio=그레그 포트폴리오");
          }}
        >
          그레그 포트폴리오
        </div>
        <div
          className="w-[200px] h-[200px] border-2 border-black"
          onClick={() => {
            router.push("/backtest/detail?portfolio=프리가바 포트폴리오");
          }}
        >
          프리가바 포트폴리오
        </div>
        <div
          className="w-[200px] h-[200px] border-2 border-black"
          onClick={() => {
            router.push("/backtest/detail?portfolio=필라인 포트폴리오");
          }}
        >
          필라인 포트폴리오
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
      </div>

      <div className="flex flex-row items-center justify-center gap-x-10">
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10">
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
        <div className="w-[200px] h-[200px] border-2 border-black">네모</div>
      </div>
    </div>
  );
}
