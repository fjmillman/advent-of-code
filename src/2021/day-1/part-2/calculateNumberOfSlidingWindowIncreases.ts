const calculateNumberOfSlidingWindowIncreases = (measurements: number[]) => {
  let numberOfIncreases = 0;

  let previousMeasurement = measurements[0] + measurements[1] + measurements[2];
  for (let i = 1; i < measurements.length; i++) {
    const measurement =
      measurements[i - 1] + measurements[i] + measurements[i + 1];
  
    if (measurement > previousMeasurement) {
      numberOfIncreases++;
    }
  
    previousMeasurement = measurement;
  }

  return numberOfIncreases;
};

export default calculateNumberOfSlidingWindowIncreases;
