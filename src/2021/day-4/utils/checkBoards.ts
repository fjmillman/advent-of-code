const checkBoards = (boards: Array<number | null>[][]): number[] => {
  const xs: number[] = [];

  for (let x = 0; x < boards.length; x++) {
    const board = boards[x];

    let hasMarkedLine = false;
    for (let i = 0; i < board.length; i++) {
      if (hasMarkedLine) {
        continue;
      }

      const lineX = board[i];
      const number = lineX[i];

      if (number !== null) {
        continue;
      }

      const lineXIsMarked = !lineX.some(
        (number: number | null) => number !== null
      );

      if (lineXIsMarked) {
        xs.push(x);
        hasMarkedLine = true;

        continue;
      }

      const lineY = board.map((line: Array<number | null>) => line[i]);

      const lineYIsMarked = !lineY.some(
        (number: number | null) => number !== null
      );

      if (lineYIsMarked) {
        xs.push(x);
        hasMarkedLine = true;

        continue;
      }
    }
  }

  return xs.sort((a, b) => b - a);
};

export default checkBoards;
