import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../utils';
import calculateNumberOfLanternfish from './calculateNumberOfLanternfish';
import { parseLanternfishTimers } from '../utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates number of lanternfish correctly', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const lanternfishTimers = parseLanternfishTimers(lines);

  const numberOfLanternfish = calculateNumberOfLanternfish(lanternfishTimers);

  expect(numberOfLanternfish).toBe(26984457539);
});

export default null;
