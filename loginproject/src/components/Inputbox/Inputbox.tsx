import React from "react";
import { InputboxContainer } from "./Inputbox.styles";

interface Props {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputbox = ({ type, onChange }: Props) => {
  return <InputboxContainer type={type} onChange={onChange} />;
};

export default Inputbox;
