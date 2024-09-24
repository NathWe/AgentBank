import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: bold;
  color: #2c3e50;
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem; /* espace entre l'icône et le texte */
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 1440px) {
    img {
      width: 100px;
    }
  }
`;

export const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
