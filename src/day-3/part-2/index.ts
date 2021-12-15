import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../utils';
import calculateLifeSupportRating from './calculateLifeSupportRating';

const binaries = parseLinesFromFile(join(__dirname, '../input.txt'));
const lifeSupportRating = calculateLifeSupportRating(binaries);

console.log(lifeSupportRating);
