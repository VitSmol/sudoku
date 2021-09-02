module.exports = function solveSudoku(matrix) {
    const matrixSize = 9;
    const boxSize = 3;
  
    
    const solution = () => {
      const currentPosition = findEmptyValue(matrix)
      // if current element not equal 0 - check next element
      if (currentPosition === null) {
        return true;
      }
      // if current element equal 0 - find appropriate value 
      for (let i = 1; i < matrixSize + 1; i++) {
        // i in range from 1 to 9
        const currentNum = i;
        const isValid = validate(currentNum, currentPosition, matrix)
        
        if (isValid) {
          const [x, y] = currentPosition;
          matrix[x][y] = currentNum;
  
          if (solution()) {
            return true;
          }
  
          matrix[x][y] = 0;
        }
      }
  
      return false;
    }
  // функция находит пустые ячейки
  const findEmptyValue = (matrix) => {
    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        if (matrix[r][c] === 0) {
          return [r, c];
        }
      }
    }
    return null;
  }

  // функция проверки текущего числа (проверяет строку, колонку и сектор)
  const validate = (num, pos, matrix) => {
    const [r,c] = pos;
    // check rows
    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][c] === num && i !== r) {
        return false;
      }
    }
    // check cols
    for (let i = 0; i < matrixSize; i++) {
      if (matrix[r][i] === num && i !== c) {
        return false;
      }
    }

    //check box
    // определяем границы сектора
    const boxRow = Math.floor( r / boxSize) * boxSize
    const boxCol = Math.floor( c / boxSize) * boxSize
    
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (matrix[i][j] === num && i !== r && j !== c) {
          return false
        }
      }
    }
    return true;
  }

    solution()
    return matrix;
  }
