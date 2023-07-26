const checkSquare = (sudokuNumbers: number[], z: number) => {
  const squareX = Math.floor((z % 9) / 3) * 3;
  const squareY = Math.floor(Math.floor(z / 9) / 3) * 3;

  if (sudokuNumbers[z] === 0) {
    return true;
  }

  for (let i = squareY; i < squareY + 3; i++) {
    for (let j = squareX; j < squareX + 3; j++) {
      if (sudokuNumbers[i * 9 + j] === 0) {
        continue;
      }
      if (i * 9 + j === z) {
        continue;
      }
      if (sudokuNumbers[i * 9 + j] === sudokuNumbers[z]) {
        return false;
      }
    }
  }

  return true;
};

const checkRow = (sudokuNumbers: number[], z: number) => {
  const y = Math.floor(z / 9);

  if (sudokuNumbers[z] === 0) {
    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (sudokuNumbers[y * 9 + i] === 0) {
      continue;
    }
    if (y * 9 + i === z) {
      continue;
    }
    if (sudokuNumbers[y * 9 + i] === sudokuNumbers[z]) {
      return false;
    }
  }

  return true;
};

const checkColumn = (sudokuNumbers: number[], z: number) => {
  const x = z % 9;

  if (sudokuNumbers[z] === 0) {
    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (sudokuNumbers[i * 9 + x] === 0) {
      continue;
    }
    if (i * 9 + x === z) {
      continue;
    }
    if (sudokuNumbers[i * 9 + x] === sudokuNumbers[z]) {
      return false;
    }
  }

  return true;
};

export const notValidNumber = (
  sudokuNumbers: number[],
  z: number
) => {
  if (
    !checkSquare(sudokuNumbers, z) ||
    !checkRow(sudokuNumbers, z) ||
    !checkColumn(sudokuNumbers, z)
  ) {
    return false;
  }

  return true;
};
