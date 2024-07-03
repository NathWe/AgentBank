import React from "react";
import { FooterContainer, FooterText } from "./footer.style";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright {new Date().getFullYear()} Argent Bank</FooterText>
    </FooterContainer>
  );
};

export default Footer;
