import { BIT_ACTIVE, BIT_INACTIVE } from '../constants';
import countBits from './countBits';

const determineMostCommonBits = (binaries: string[]) => {
  const bitCounts = countBits(binaries);

  return bitCounts.map(([activeBitCount, inactiveBitCount]: [number, number]) =>
    activeBitCount >= inactiveBitCount ? BIT_ACTIVE : BIT_INACTIVE
  );
};

export default determineMostCommonBits;
