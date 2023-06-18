import React, { useEffect } from "react";
import { NumberSquareStyle } from "./NumberSquare.styles";
import ChoseNumber from "../chosenumber/ChoseNumber";

interface Props {
  number: number;
  boxIndex: number;
  setNumber: (id: number) => void;
}

const NumberSquare = ({ number, boxIndex, setNumber }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const row = Math.floor(boxIndex / 9);
  const col = boxIndex % 9;

  const borderStyles = `
    ${
      row % 3 === 2 && row !== 8
        ? "border-bottom: 2px solid #fff123;"
        : ""
    }
    ${
      col % 3 === 2 && col !== 8
        ? "border-right: 2px solid #fff123;"
        : ""
    }
  `;

  const handleClick = () => {
    setOpen((value) => !value);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NumberSquareStyle.Container
      ref={ref}
      onClick={handleClick}
      borderStyles={borderStyles}
      isOpen={open}
    >
      <NumberSquareStyle.Number>{number}</NumberSquareStyle.Number>
      {open && (
        <ChoseNumber setNumber={setNumber} setIsOpen={setOpen} />
      )}
    </NumberSquareStyle.Container>
  );
};

export default NumberSquare;
