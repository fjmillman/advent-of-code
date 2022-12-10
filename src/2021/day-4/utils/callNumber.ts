const callNumber = (calledNumber: number, boards: Array<number | null>[][]) =>
  boards.map((board: Array<number | null>[]) =>
    board.map((lines: Array<number | null>) =>
      lines.map((number: number | null) =>
        number === calledNumber ? null : number
      )
    )
  );

export default callNumber;
