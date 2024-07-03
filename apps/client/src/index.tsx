import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import App from "./App";
import GlobalStyles from "./GlobalStyle";
import { worker } from "../Mocks/browser";

// Démarrer le worker MSW en mode développement uniquement
if (process.env.REACT_APP_ENV === "development") {
  worker.start();
}

console.log("Rendering root");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
