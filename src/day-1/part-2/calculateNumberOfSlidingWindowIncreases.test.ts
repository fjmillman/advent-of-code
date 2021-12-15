import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../utils';
import calculateNumberOfSlidingWindowIncreases from './calculateNumberOfSlidingWindowIncreases';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates number of sliding window increases correctly', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const measurements = lines.map((x: string) => parseInt(x));

  const numberOfIncreases =
    calculateNumberOfSlidingWindowIncreases(measurements);

  expect(numberOfIncreases).toBe(5);
});

export default null;
