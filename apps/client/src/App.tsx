// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/error/error";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/SignIn";
import Transactions from "./pages/transactions/transactions";
import User from "./pages/user/user";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import ProtectedPageLayout from "../src/layouts/ProtectedPageLayout";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <ProtectedPageLayout>
              <User />
            </ProtectedPageLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedPageLayout>
              <Transactions />
            </ProtectedPageLayout>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
