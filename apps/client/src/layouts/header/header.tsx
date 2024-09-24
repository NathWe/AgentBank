// src/components/header/header.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Nav, NavLink, NavLogo, SrOnly } from "./header.style";
import { logout } from "../../lib/auth/slices/authSlice";
import { RootState, AppDispatch } from "../../lib/CreateStore";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Nav>
      <NavLogo to="/">
        <img src="img/argentBankLogo.png" alt="Argent Bank Logo" />
        <SrOnly>Argent Bank</SrOnly>
      </NavLogo>
      <div>
        {user ? (
          <>
            <NavLink to="/profile">
              <FontAwesomeIcon icon={faUserCircle} />
              {user.firstName}
            </NavLink>
            <NavLink to="/" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        )}
      </div>
    </Nav>
  );
};

export default Header;
