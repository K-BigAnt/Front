import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../page";

describe("Home Component", () => {
  it("특정 버튼이 있는지 확인", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /버튼/ })).toBeInTheDocument();
    });
  });
});
