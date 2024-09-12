"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const oAuth = ({ oAuth }: { oAuth: string }) => {
  const oauth_url = `http://localhost:80/v1/auth/${oAuth}`;

  return (
    <Button
      variant="outline"
      className="w-full h-[42px] rounded-[6px] border-slate-200"
      style={{
        backgroundColor:
          oAuth === "kakao"
            ? "#FEE500"
            : oAuth === "naver"
              ? "#03C75A"
              : "#FFFFFF",
      }}
    >
      <Link className="flex items-center gap-[10px]" href={oauth_url}>
        {oAuth !== "google" && (
          <Image src={`/${oAuth}.svg`} alt={oAuth} width={24} height={24} />
        )}
        <div>
          {oAuth === "kakao" ? "카카오" : oAuth === "naver" ? "네이버" : "구글"}
          로 계속하기
        </div>
      </Link>
    </Button>
  );
};

export default oAuth;
