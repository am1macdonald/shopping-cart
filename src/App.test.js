/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("testing app: general", () => {
  it("renders App", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });
});

describe("testing navigation bar", () => {
  it("renders", () => {
    render(<App />);

    const navTitle = screen.getByText(/mega lo mart/i);
    expect(navTitle).toBeInTheDocument();
  });
});

describe("end to end test", () => {
  it("navigates", () => {
    render(<App />);

    const navTabs = screen.getAllByRole("link")
    console.log(navTabs.length)
  });
});
