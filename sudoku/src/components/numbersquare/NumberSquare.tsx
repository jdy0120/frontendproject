import React, { useEffect } from "react";
import { NumberSquareStyle } from "./NumberSquare.styles";
import ChoseNumber from "../chosenumber/ChoseNumber";
import { notValidNumber } from "../../utils/number.check";

interface Props {
  number: number;
  boxIndex: number;
  sudoku: number[];
  setNumber: (id: number) => void;
}

const NumberSquare = ({
  number,
  boxIndex,
  sudoku,
  setNumber,
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [isValidSquare, setIsValidSquare] =
    React.useState<boolean>(true);

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

  useEffect(() => {
    if (!notValidNumber(sudoku, boxIndex)) {
      setIsValidSquare(false);
    } else {
      setIsValidSquare(true);
    }
  }, [number]);

  return (
    <NumberSquareStyle.Container
      ref={ref}
      onClick={handleClick}
      borderStyles={borderStyles}
      isvalidsquare={isValidSquare}
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
