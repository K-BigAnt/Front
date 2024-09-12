import React from "react";
import OAuth from "./OAuth";
import Title from "./Title";
import { Button } from "../../../components/ui/Button"; // 경로 수정

const Login = () => {
  const oAuths = ["kakao", "naver", "google"];

  return (
    <div
      id="login"
      className="md:w-[360px] border-black border-solid flex flex-col p-[26px]"
    >
      <Title />
      <div className="btn-group gap-[8px] flex flex-col mt-[32px]">
        {oAuths.map((oAuth) => (
          <OAuth oAuth={oAuth} key={oAuth} />
        ))}
      </div>
      <div className="login flex flex-row items-center gap-[14px] mt-[132px] text-[14px]">
        <div className="text-slate-500">이미 BigAnt 회원이신가요?</div>
        <Button variant="default" className="bg-slate-100 text-slate-900">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
