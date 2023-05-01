import React from "react";
import { InputboxContainer } from "./Inputbox.styles";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputbox = ({ onChange }: Props) => {
  return <InputboxContainer onChange={onChange} />;
};

export default Inputbox;
