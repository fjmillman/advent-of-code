const calculateSumOfUnmarkedNumbers = (board: number[][]) =>
  board.reduce(
    (total: number, line: Array<number | null>) =>
      line.reduce(
        (total: number, number: number | null) => total + (number ?? 0),
        total
      ),
    0
  );

export default calculateSumOfUnmarkedNumbers;
