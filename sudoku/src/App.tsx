import { useState, useEffect } from "react";
import NumberSquare from "./components/numbersquare/NumberSquare";
import "./App.css";

function App() {
  const [sudoku, setSudoku] = useState<number[]>(Array(81).fill(0));

  const setNumber = (boxIndex: number) => (id: number) => {
    setSudoku((prev) => {
      const newSudoku = [...prev];
      newSudoku[boxIndex] = id;
      return newSudoku;
    });
  };

  useEffect(() => {
    console.log(sudoku);
  }, [sudoku]);

  return (
    <div className="container">
      <div className="boxContainer">
        {sudoku.map((number, i) => {
          return (
            <NumberSquare
              key={i}
              boxIndex={i}
              number={number}
              setNumber={setNumber(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
