import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../../utils';
import calculatePointsOfOverlapWithDiagonals from './calculatePointsOfOverlapWithDiagonals';
import { parseLinesOfCoordinates } from '../utils';

const lines = parseLinesFromFile(join(__dirname, '../input.txt'));
const linesOfCoordinates = parseLinesOfCoordinates(lines);

const numberOfOverlappingPoints =
  calculatePointsOfOverlapWithDiagonals(linesOfCoordinates);

console.log(numberOfOverlappingPoints);
