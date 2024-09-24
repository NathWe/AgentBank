// src/pages/SignIn.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Main,
  Section,
  SignInIcon,
  SignInButton,
  InputWrapper,
  InputRemember,
  MessageConnexionError,
} from "./signIn.styles";
import { login } from "../../lib/auth/usecases/LoginUseCase";
import { AppDispatch } from "../../lib/CreateStore";

const SignIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const userLogin = { email, password };
    console.log("Attempting login with", userLogin);
    try {
      await dispatch(login(userLogin));
      console.log("Login successful, navigating to profile");
      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
      setInvalid(true);
    }
  };

  return (
    <Main>
      <Section>
        <SignInIcon className="fa fa-user-circle"></SignInIcon>
        <h1>Sign In</h1>
        <form onSubmit={loginHandler}>
          <InputWrapper>
            <label htmlFor="email">Username</label>
            <input
              id="email"
              name="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
          </InputWrapper>
          <InputRemember>
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>
          <SignInButton type="submit">Sign In</SignInButton>
        </form>
        {invalid && (
          <MessageConnexionError>invalid credentials</MessageConnexionError>
        )}
      </Section>
    </Main>
  );
};

export default SignIn;
