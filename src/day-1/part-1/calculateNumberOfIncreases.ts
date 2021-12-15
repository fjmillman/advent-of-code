const calculateNumberOfIncreases = (measurements: number[]) => {
  let numberOfIncreases = 0;

  let previousMeasurement = measurements[0];
  for (let i = 1; i < measurements.length; i++) {
    const measurement = measurements[i];

    if (measurement > previousMeasurement) {
      numberOfIncreases++;
    }

    previousMeasurement = measurement;
  }

  return numberOfIncreases;
};

export default calculateNumberOfIncreases;
