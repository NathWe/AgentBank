import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import SignIn from "./SignIn";

const mockStore = configureMockStore([]);
const store = mockStore({});

describe("SignIn Component", () => {
  test("renders SignIn component and handles login", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    // Vérifie que les éléments sont bien rendus
    expect(
      screen.getByRole("heading", { name: /Sign In/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Simule la saisie de l'utilisateur
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password" },
    });

    // Simule la soumission du formulaire
    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    // Ajouter des attentes pour vérifier le comportement après la connexion
    // Par exemple, vérifier que la navigation ou un appel API a été effectué
  });
});
