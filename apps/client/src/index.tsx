// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./GlobalStyle";

import { createStore } from "./lib/CreateStore";
import { HttpAuthService } from "./lib/auth/infra/HttpAuthService";
import { FakeTransactionService } from "./lib/transactions/infra/FakeTransactionService";

const store = createStore({
  authService: new HttpAuthService(),
  // transactionService: new HttpTransactionService(),
  // authService: new FakeAuthService(),
  transactionService: new FakeTransactionService(),
});

const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Index />);
