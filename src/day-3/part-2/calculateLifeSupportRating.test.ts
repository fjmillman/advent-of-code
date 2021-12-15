import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../utils';
import calculateLifeSupportRating from './calculateLifeSupportRating';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates life support rating correctly', () => {
  const binaries = parseLinesFromFile(join(__dirname, '../test.txt'));

  const lifeSupportRating = calculateLifeSupportRating(binaries);

  expect(lifeSupportRating).toBe(230);
});

export default null;
