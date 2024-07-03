import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
