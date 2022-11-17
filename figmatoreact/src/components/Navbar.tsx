import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Search</MenuLink>
            <MenuLink href="">Login</MenuLink>
            <Button>Join Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }
`;
const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1 rgb(0, 0, 0, 0.07);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    width: 100%;
    transition: max-height 0.3s ease-in-out;

    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
  }
`;
const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background-color: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.2s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    padding: 0.3rem;
  }
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
