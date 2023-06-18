import React from "react";
import { ChoseNumberStyle } from "./ChoseNumber.styles";

interface ChoseNumberProps {
  setNumber: (id: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChoseNumber = ({ setNumber, setIsOpen }: ChoseNumberProps) => {
  const handleClick =
    (id: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setNumber(id);
      setIsOpen(false);
    };

  return (
    <ChoseNumberStyle.Container>
      {Array(10)
        .fill(0)
        .map((_, i) => {
          return (
            <ChoseNumberStyle.NumberBox
              key={i}
              onClick={handleClick(i)}
            >
              <ChoseNumberStyle.Number>{i}</ChoseNumberStyle.Number>
            </ChoseNumberStyle.NumberBox>
          );
        })}
    </ChoseNumberStyle.Container>
  );
};

export default ChoseNumber;
