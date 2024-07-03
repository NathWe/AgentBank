// src/pages/error/Error.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "./error";

describe("Error Component", () => {
  test("renders Error component", () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );

    expect(screen.getByAltText("page 404")).toBeInTheDocument();
    expect(screen.getByText(/Back to main page/i)).toBeInTheDocument();
  });
});
