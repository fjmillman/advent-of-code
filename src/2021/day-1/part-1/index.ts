import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../../utils';
import calculateNumberOfIncreases from './calculateNumberOfIncreases';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const measurements = lines.map((x: string) => parseInt(x));

const numberOfIncreases = calculateNumberOfIncreases(measurements);

console.log(numberOfIncreases);
