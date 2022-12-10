const populateBoards = (lines: string[], boards: number[][][] = [], i = 0) => {
  if (lines.length === 0) {
    return boards;
  }

  const [line, ...remainingLines] = lines;

  if (!line) {
    return populateBoards(remainingLines, boards, i + 1);
  }

  const numbers = line
    .trimStart()
    .split(/\s+/)
    .map((x: string) => parseInt(x));

  if (!boards[i]) {
    boards[i] = [];
  }

  boards[i].push(numbers);

  return populateBoards(remainingLines, boards, i);
};

export default populateBoards;
