import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../../utils';
import calculateNumberOfIncreases from './calculateNumberOfIncreases';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates number of increases correctly', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const measurements = lines.map((x: string) => parseInt(x));

  const numberOfIncreases = calculateNumberOfIncreases(measurements);

  expect(numberOfIncreases).toBe(7);
});

export default null;
