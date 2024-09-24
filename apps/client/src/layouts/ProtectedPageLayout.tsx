// src/layouts/ProtectedPageLayout.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../lib/CreateStore";

interface ProtectedPageLayoutProps {
  children: React.ReactNode;
}

const ProtectedPageLayout: React.FC<ProtectedPageLayoutProps> = ({
  children,
}) => {
  const isUserAuthenticated = useSelector(
    (state: RootState) => !!state.auth.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      "ProtectedPageLayout useEffect called, isUserAuthenticated:",
      isUserAuthenticated
    );
    if (!isUserAuthenticated) {
      console.log("User not authenticated, redirecting to login");
      navigate("/login");
    }
  }, [isUserAuthenticated, navigate]);

  if (!isUserAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedPageLayout;
