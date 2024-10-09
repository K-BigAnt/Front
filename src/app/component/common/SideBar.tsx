"use client";

import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="flex flex-col items-start justify-center mx-10">
      <div className="text-4xl font-bold mb-10">로고</div>
      <div className="flex flex-col gap-y-3">
        <div
          className={`text-2xl font-bold ${path.includes("/backtest") ? "text-blue-500" : "text-black"}`}
          onClick={() => router.push("/backtest")}
        >
          백테스트
        </div>
        <div
          className={`text-2xl font-bold ${path.includes("/board") ? "text-blue-500" : "text-black"}`}
          onClick={() => router.push("/board")}
        >
          게시판
        </div>
        <div className="text-2xl font-bold"> 로그인 </div>
        <div className="flex items-center justify-center" onClick={() => router.push("/profile/userId")}>
          <div className="w-[40px] h-[40px] rounded-full bg-red-300"></div>
          <div
            className={`text-2xl font-bold ${path.includes("/profile/") ? "text-blue-500" : "text-black"} pl-2`}
          >
            내정보
          </div>
        </div>
      </div>
    </div>
  );
}
