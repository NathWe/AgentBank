import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  width: 100%;
  margin-bottom: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorImage = styled.img`
  width: 50%;
`;

export const ErrorLink = styled(Link)`
  color: green;
`;
