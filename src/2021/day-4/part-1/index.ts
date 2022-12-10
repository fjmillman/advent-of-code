import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../../utils';
import calculateFinalScore from './calculateFinalScore';
import { parseNumbersAndBoards } from '../utils';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const [numbers, boards] = parseNumbersAndBoards(lines);
const finalScore = calculateFinalScore(numbers, boards);

console.log(finalScore);
