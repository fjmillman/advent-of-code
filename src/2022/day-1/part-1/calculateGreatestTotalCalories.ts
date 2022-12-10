const calculateGreatestTotalCalories = (elvesLines: number[][]) =>
  elvesLines.reduce((greatestTotal: number, elfLines: number[]) => {
    const total = elfLines.reduce(
      (total: number, calories: number) => total + calories
    );

    return total > greatestTotal ? total : greatestTotal;
  }, 0);

export default calculateGreatestTotalCalories;
