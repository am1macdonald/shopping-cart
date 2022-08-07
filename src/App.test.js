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