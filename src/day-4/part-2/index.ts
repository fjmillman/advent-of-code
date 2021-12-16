import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../utils';
import calculateLastFinalScore from './calculateLastFinalScore';
import { parseNumbersAndBoards } from '../utils';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const [numbers, boards] = parseNumbersAndBoards(lines);
const lastFinalScore = calculateLastFinalScore(numbers, boards);

console.log(lastFinalScore);
