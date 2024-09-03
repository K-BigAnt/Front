import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "../component/Login/Login";
import axios from "axios";

describe("Login Component", () => {
  beforeEach(() => {
    render(<Login />);
  });
  
  it("login logo 테스트", () => {
    const logo = screen.getByRole("img", { name: /logo/i }); // 로고의 alt 텍스트에 맞게 수정
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("svg"); // 로고가 SVG 형식인지 확인
  });

  it("login title 테스트", () => {
    expect(screen.getByText(/BigAnt와 함께/i)).toBeInTheDocument();
    expect(screen.getByText(/1억 모으기/i)).toBeInTheDocument();
    expect(screen.getByText(/SNS계정으로 빠르게 시작하기/i)).toBeInTheDocument();
  });

  it("OAuth 버튼 렌더 확인", () => {
    expect(screen.getByRole("button", { name: /카카오로 계속하기/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /네이버로 계속하기/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /구글로 계속하기/i })).toBeInTheDocument();
  });

  it("회원가입 버튼 렌더 확인", () => {
    expect(screen.getByText(/이미 BigAnt 회원이신가요?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /회원가입/i })).toBeInTheDocument();
  });
  
  // Todo : API 성공시 정상적인 JWT를 받고, 저장하고 화면전환이 되는지 확인

  // Todo : 로그인 실패시 메세지 렌더링 확인
});