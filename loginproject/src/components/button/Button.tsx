import React from "react";
import { ButtonContainer } from "./Button.styles";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Button;
