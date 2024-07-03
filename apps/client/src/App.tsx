import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Error from "./pages/error/error";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/SignIn";
import Transactions from "./pages/transactions/transactions";
import User from "./pages/user/user";

const App: React.FC = () => {
  console.log("App component rendered");

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
