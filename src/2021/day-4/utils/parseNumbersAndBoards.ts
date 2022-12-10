import populateBoards from './populateBoards';

const parseNumbersAndBoards = (lines: string[]) => {
  const [numbersLine, , ...boardLines] = lines;

  const numbers = numbersLine.split(',').map((x: string) => parseInt(x));

  const boards = populateBoards(boardLines);

  return [numbers, boards];
};

export default parseNumbersAndBoards;
