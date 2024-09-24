// src/components/SignOut.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../lib/auth/slices/authSlice";
import { AppDispatch } from "../../lib/CreateStore";

const SignOut: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
