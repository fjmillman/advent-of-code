import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../utils';
import calculateNumberOfLanternfish from './calculateNumberOfLanternfish';
import { parseLanternfishTimers } from '../utils';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const lanternfishTimers = parseLanternfishTimers(lines);

const numberOfLanternfish = calculateNumberOfLanternfish(lanternfishTimers);

console.log(numberOfLanternfish);
