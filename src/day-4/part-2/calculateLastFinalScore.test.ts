import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../utils';
import calculateLastFinalScore from './calculateLastFinalScore';
import { parseNumbersAndBoards } from '../utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates final score correctly', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const [numbers, boards] = parseNumbersAndBoards(lines);

  const finalScore = calculateLastFinalScore(numbers, boards);

  expect(finalScore).toBe(1924);
});

export default null;
