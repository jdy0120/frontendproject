import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import bg from "../assets/bg.png";
import Tilt from "react-tilt";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper>
            <img src={image} alt="" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled.div<{ bg: string }>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
  }
`;
