import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../../utils';
import calculateGreatestTotalCalories from './calculateGreatestTotalCalories';
import parseCaloriesPerElf from '../parseCaloriesPerElf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates greatest total of calories carried by a single elf', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const elvesLines = parseCaloriesPerElf(lines);
  const greatestCalories = calculateGreatestTotalCalories(elvesLines);

  expect(greatestCalories).toBe(24000);
});

export default null;
