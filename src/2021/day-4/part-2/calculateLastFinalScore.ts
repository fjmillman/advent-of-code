import {
  calculateSumOfUnmarkedNumbers,
  callNumber,
  checkBoards,
} from '../utils';

const calculateLastFinalScore = (
  numbers: number[],
  boards: Array<number | null>[][]
) => {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    boards = callNumber(number, boards);

    const boardXs = checkBoards(boards);

    if (boardXs.length === 0) {
      continue;
    }

    let board: number[][];

    for (const boardX of boardXs) {
      board = boards[boardX];

      boards.splice(boardX, 1);
    }

    if (i >= numbers.length - 1 || boards.length <= 0) {
      const sumOfUnmarkedNumbers = calculateSumOfUnmarkedNumbers(board);

      return number * sumOfUnmarkedNumbers;
    }
  }

  return 0;
};

export default calculateLastFinalScore;
