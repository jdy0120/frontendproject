import { useState, useEffect } from "react";
import NumberSquare from "./components/numbersquare/NumberSquare";
import "./App.css";
import { getAxios } from "./api/api";

interface GetSudokuProps {
  difficulty: "hard" | "medium" | "easy" | "random";
  setSudoku: React.Dispatch<React.SetStateAction<number[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const getSudoku = async ({
  difficulty,
  setSudoku,
  setIsLoading,
}: GetSudokuProps) => {
  setIsLoading(true);

  const { board } = await getAxios(difficulty);
  const sudoku = board.join(",");
  setSudoku(sudoku.split(",").map(Number));

  setIsLoading(false);
};

function App() {
  const [sudoku, setSudoku] = useState<number[]>(Array(81).fill(0));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setNumber = (boxIndex: number) => (id: number) => {
    setSudoku((prev) => {
      const newSudoku = [...prev];
      newSudoku[boxIndex] = id;
      return newSudoku;
    });
  };

  useEffect(() => {
    getSudoku({
      difficulty: "hard",
      setSudoku,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div className="container">
      {isLoading && <div className="loading">Loading...</div>}
      <div className="boxContainer">
        {sudoku.map((number, i) => {
          return (
            <NumberSquare
              key={i}
              boxIndex={i}
              number={number}
              sudoku={sudoku}
              setNumber={setNumber(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
