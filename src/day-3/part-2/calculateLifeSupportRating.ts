import { BIT_ACTIVE, BIT_INACTIVE } from '../constants';
import { determineLeastCommonBits, determineMostCommonBits } from '../utils';

const filterByActiveBit = (binaries: string[], i: number) =>
  binaries.filter((binary: string) => binary[i] === BIT_ACTIVE);

const filterByInactiveBit = (binaries: string[], i: number) =>
  binaries.filter((binary: string) => binary[i] === BIT_INACTIVE);

const calculateOxygenGeneratorRating = (binaries: string[], i = 0) => {
  if (i > binaries[0].length - 1) {
    return 0;
  }

  const mostCommonBits = determineMostCommonBits(binaries);

  const filteredBinaries =
    mostCommonBits[i] === BIT_ACTIVE
      ? filterByActiveBit(binaries, i)
      : filterByInactiveBit(binaries, i);

  if (filteredBinaries.length === 0) {
    return 0;
  }

  if (filteredBinaries.length === 1) {
    return parseInt(filteredBinaries[0], 2);
  }

  return calculateOxygenGeneratorRating(filteredBinaries, i + 1);
};

const calculateCo2GeneratorRating = (binaries: string[], i = 0) => {
  if (i > binaries[0].length - 1) {
    return 0;
  }

  const leastCommonBits = determineLeastCommonBits(binaries);

  const filteredBinaries =
    leastCommonBits[i] === BIT_ACTIVE
      ? filterByActiveBit(binaries, i)
      : filterByInactiveBit(binaries, i);

  if (filteredBinaries.length === 0) {
    return 0;
  }

  if (filteredBinaries.length === 1) {
    return parseInt(filteredBinaries[0], 2);
  }

  return calculateCo2GeneratorRating(filteredBinaries, i + 1);
};

const calculateLifeSupportRating = (binaries: string[]) => {
  const oxygenGeneratorRating = calculateOxygenGeneratorRating(binaries);
  const co2GeneratorRating = calculateCo2GeneratorRating(binaries);

  return oxygenGeneratorRating * co2GeneratorRating;
};

export default calculateLifeSupportRating;
