import { determineLeastCommonBits, determineMostCommonBits } from '../utils';

const calculateGammaRate = (binaries: string[]) => {
  const mostCommonBits = determineMostCommonBits(binaries);

  const gammaRateBinary = mostCommonBits.join('');

  return parseInt(gammaRateBinary, 2);
};

const calculateEpsilonRate = (binaries: string[]) => {
  const leastCommonBits = determineLeastCommonBits(binaries);

  const epsilonRateBinary = leastCommonBits.join('');

  return parseInt(epsilonRateBinary, 2);
};

const calculatePowerConsumption = (binaries: string[]) => {
  const gammaRateDecimal = calculateGammaRate(binaries);
  const epsilonRateDecimal = calculateEpsilonRate(binaries);

  return gammaRateDecimal * epsilonRateDecimal;
};

export default calculatePowerConsumption;
