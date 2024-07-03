import styled from "styled-components";

export const Main = styled.main`
  background-color: #12002b;
  height: 780px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  background-color: white;
  width: 300px;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
`;

export const SignInIcon = styled.i`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const SignInButton = styled.button`
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
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const InputRemember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    cursor: pointer;
  }

  label {
    margin-left: 0.25rem;
    cursor: pointer;
  }
`;

export const MessageConnexionError = styled.div`
  color: red;
  margin-top: 1rem;
`;
