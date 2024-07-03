import styled from "styled-components";

export const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    flex: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountBalance = styled.p`
  margin: 0;
`;

export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;

  &.transaction-button-clicked {
    background-color: #22492e;
  }

  @media (min-width: 720px) {
    width: 200px;
  }
`;
