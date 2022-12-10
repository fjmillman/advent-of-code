import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../../utils';
import calculateGreatestTotalCalories from './calculateGreatestTotalCalories';
import parseCaloriesPerElf from '../parseCaloriesPerElf';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const elvesLines = parseCaloriesPerElf(lines);
const greatestCalories = calculateGreatestTotalCalories(elvesLines);

console.log(greatestCalories);
