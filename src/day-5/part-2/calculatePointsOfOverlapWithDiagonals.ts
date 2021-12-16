const calculatePointsOfOverlapWithDiagonals = (
  linesOfCoordinates: [[number, number], [number, number]][]
) => {
  const [maxX, maxY] = linesOfCoordinates.reduce(
    ([maxX, maxY], [[x1, y1], [x2, y2]]) => {
      return [Math.max(maxX, x1, x2), Math.max(maxY, y1, y2)];
    },
    [0, 0]
  );

  const grid = new Array<number[]>(maxY + 1);
  for (let y = 0; y <= maxY; y++) {
    grid[y] = new Array<number>(maxX + 1).fill(0);
  }

  for (const [[x1, y1], [x2, y2]] of linesOfCoordinates) {
    if (x1 === x2) {
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        grid[y][x1] = grid[y][x1] + 1;
      }

      continue;
    }

    if (y1 === y2) {
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        grid[y1][x] = grid[y1][x] + 1;
      }

      continue;
    }

    const isXIncrementing = Math.min(y1, y2) === y1 ? x1 < x2 : x2 < x1;

    for (
      let [y, x] = [
        Math.min(y1, y2),
        isXIncrementing ? Math.min(x1, x2) : Math.max(x1, x2),
      ];
      y <= Math.max(y1, y2);
      y++ && isXIncrementing ? x++ : x--
    ) {
      grid[y][x] = grid[y][x] + 1;
    }
  }

  return grid.reduce(
    (overlapCount: number, yLine: number[]) =>
      yLine.reduce(
        (overlapCount: number, x: number) => overlapCount + (x >= 2 ? 1 : 0),
        overlapCount
      ),
    0
  );
};

export default calculatePointsOfOverlapWithDiagonals;
