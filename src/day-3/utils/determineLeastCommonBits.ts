import { BIT_ACTIVE, BIT_INACTIVE } from '../constants';
import countBits from './countBits';

const determineLeastCommonBits = (binaries: string[]) => {
  const bitCounts = countBits(binaries);

  return bitCounts.map(([activeBitCount, inactiveBitCount]: [number, number]) =>
    inactiveBitCount <= activeBitCount ? BIT_INACTIVE : BIT_ACTIVE
  );
};

export default determineLeastCommonBits;
