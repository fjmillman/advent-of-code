const parseLinesOfCoordinates = (
  lines: string[]
): [[number, number], [number, number]][] =>
  lines.map(
    (line: string) =>
      line
        .split(' -> ', 2)
        .map(
          (coordinates: string) =>
            coordinates
              .split(',')
              .map((position: string) => parseInt(position)) as [number, number]
        ) as [[number, number], [number, number]]
  );

export default parseLinesOfCoordinates;
