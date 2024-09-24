import * as React from "react";
import { ErrorContainer, ErrorImage, ErrorLink } from "./error.style";

const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorImage src="/img/error.png" alt="page 404" />
      <ErrorLink to="/">Back to main page</ErrorLink>
    </ErrorContainer>
  );
};

export default Error;
