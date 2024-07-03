// src/pages/home/Home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";

describe("Home Component", () => {
  test("renders Home component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );


    expect(screen.getByText(/No fees./i)).toBeInTheDocument();
    expect(screen.getByText(/No minimum deposit./i)).toBeInTheDocument();
    expect(screen.getByText(/High interest rates./i)).toBeInTheDocument();
    expect(
      screen.getByText(/Open a savings account with Argent Bank today!/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/You are our #1 priority/i)).toBeInTheDocument();
    expect(
      screen.getByText(/More savings means higher rates/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Security you can trust/i)).toBeInTheDocument();
  });
});
