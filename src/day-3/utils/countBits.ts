import { BIT_ACTIVE, BIT_INACTIVE } from '../constants';

const countBits = (binaries: string[]) =>
  binaries.reduce((bitCounts: [number, number][], binary: string) => {
    const bits = binary.split('');

    return bits.reduce(
      (bitCounts: [number, number][], bit: string, i: number) => {
        if (bitCounts[i] === undefined) {
          bitCounts[i] = [0, 0];
        }

        let [activeBitCount, inactiveBitCount] = bitCounts[i];

        if (bit === BIT_ACTIVE) {
          activeBitCount++;
        }

        if (bit === BIT_INACTIVE) {
          inactiveBitCount++;
        }

        bitCounts[i] = [activeBitCount, inactiveBitCount];

        return bitCounts;
      },
      bitCounts
    );
  }, []);

export default countBits;
