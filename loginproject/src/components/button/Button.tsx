import React from "react";
import { ButtonContainer } from "./Button.styles";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>Button</ButtonContainer>;
};

export default Button;
