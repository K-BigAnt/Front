"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import instance from "../api/AxiosInstance";
export default function callBack() {
  const searchParams = useSearchParams();
  const oAuth = searchParams.get("oAuth");
  const code = searchParams.get("code");

  useEffect(() => {
    const postOAuthCode = async () => {
      try {
        const res = await instance.post(`/v1/auth/${oAuth}`, null, {
          params: {
            code,
          },
        });
        localStorage.setItem("JWT", res.data.token);
        window.location.href = "/";
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    };
    postOAuthCode();
  }, [oAuth, code]);
  return <div>loading</div>;
}
