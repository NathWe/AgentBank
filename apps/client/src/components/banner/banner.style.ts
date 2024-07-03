import styled from "styled-components";

export const Hero = styled.div`
  background-image: url("/img/bank-tree.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 375px) {
    height: 400px;
    background-position: center;
  }

  @media (min-width: 920px) {
    height: 400px;
    background-position: center;
  }

  @media (min-width: 1440px) {
    height: 600px;
    background-position: center;
  }
`;

export const HeroContent = styled.section`
  position: relative;
  top: 5%;
  width: 90%;
  background: white;
  padding: 1rem;
  text-align: left;
  margin: auto;

  @media (min-width: 375px) {
    width: 40%;
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 2rem;
  }

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }

  @media (min-width: 1040px) {
    width: 32%;
    top: 50px;
    right: 50px;
  }
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 1.5rem;
  }

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 1rem;

  @media (min-width: 375px) {
    font-size: 1.2rem;
  }

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;
