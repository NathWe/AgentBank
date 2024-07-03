// src/pages/user/User.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import User from "./user";

const mockStore = configureStore([thunk]);

describe("User Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: { firstName: "John", lastName: "Doe" },
        token: "dummyToken",
      },
    });
  });

  test("renders User component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <User />
        </BrowserRouter>
      </Provider>
    );

    // Vérifie que les éléments sont bien rendus
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Argent Bank Checking/i)).toBeInTheDocument();
    expect(screen.getByText(/\$2,082.79/i)).toBeInTheDocument();
  });
});
