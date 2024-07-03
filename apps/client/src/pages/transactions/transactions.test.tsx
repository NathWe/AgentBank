// src/pages/transactions/Transactions.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Transactions from "./transactions";

const mockStore = configureStore([thunk]);

describe("Transactions Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: { firstName: "John", lastName: "Doe" },
        token: "dummyToken",
      },
    });
  });

  test("renders Transactions component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Transactions />
        </BrowserRouter>
      </Provider>
    );

    // Vérifie que les éléments sont bien rendus
    expect(screen.getByText(/Transactions/i)).toBeInTheDocument();
  });
});
