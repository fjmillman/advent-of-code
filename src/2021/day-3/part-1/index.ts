import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../../utils';
import calculatePowerConsumption from './calculatePowerConsumption';

const binaries = parseLinesFromFile(join(__dirname, '../input.txt'));
const powerConsumption = calculatePowerConsumption(binaries);

console.log(powerConsumption);
