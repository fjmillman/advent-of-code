import {
  calculateSumOfUnmarkedNumbers,
  callNumber,
  checkBoards,
} from '../utils';

const calculateFinalScore = (
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

    for (const boardX of boardXs) {
      const board = boards[boardX];

      boards.splice(boardX, 1);

      const sumOfUnmarkedNumbers = calculateSumOfUnmarkedNumbers(board);

      return number * sumOfUnmarkedNumbers;
    }
  }
};

export default calculateFinalScore;
