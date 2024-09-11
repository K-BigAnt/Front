"use client";

import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  const path = usePathname();

  console.log;
  return (
    <div className="flex flex-col items-start justify-center mx-10">
      <div className="text-4xl font-bold mb-10">로고</div>
      <div className="flex flex-col gap-y-3">
        <div
          className="text-2xl font-bold"
          onClick={() => router.push("/backtest")}
          style={{
            color: path === "/backtest" ? "blue" : "black",
          }}
        >
          백테스트
        </div>
        <div
          className="text-2xl font-bold"
          onClick={() => router.push("/")}
          style={{
            color: path === "/" ? "blue" : "black",
          }}
        >
          게시판
        </div>
      </div>
    </div>
  );
}
