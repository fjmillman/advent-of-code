const parseCaloriesPerElf = (lines: string[]): number[][] =>
  lines.reduce<number[][]>((elvesLines: number[][], line: string) => {
    if (line.length === 0) {
      elvesLines.push([]);

      return elvesLines;
    }

    const elfsLines = elvesLines.pop() ?? [];
    elfsLines.push(parseInt(line));
    elvesLines.push(elfsLines);

    return elvesLines;
  }, []);

export default parseCaloriesPerElf;
