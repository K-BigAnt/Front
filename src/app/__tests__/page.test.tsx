import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../page";
import Login from "../component/Login/Login";
describe("Home Component", () => {
  it("특정 버튼이 있는지 확인", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /버튼/ })).toBeInTheDocument();
    });
  });
});

describe("Login Component", () => {
  it("버튼이 있는지 확인", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: /로그인/ })).toBeInTheDocument();
  });
});
