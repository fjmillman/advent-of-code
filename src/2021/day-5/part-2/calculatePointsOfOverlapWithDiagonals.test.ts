import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../../utils';
import calculatePointsOfOverlapWithDiagonals from './calculatePointsOfOverlapWithDiagonals';
import { parseLinesOfCoordinates } from '../utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates number of overlapping points correctly', () => {
  const lines = parseLinesFromFile(join(__dirname, '../test.txt'));
  const linesOfCoordinates = parseLinesOfCoordinates(lines);

  const numberOfOverlappingPoints =
    calculatePointsOfOverlapWithDiagonals(linesOfCoordinates);

  expect(numberOfOverlappingPoints).toBe(12);
});

export default null;
