import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../../utils';
import calculatePowerConsumption from './calculatePowerConsumption';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates power consumption correctly', () => {
  const binaries = parseLinesFromFile(join(__dirname, '../test.txt'));

  const powerConsumption = calculatePowerConsumption(binaries);

  expect(powerConsumption).toBe(198);
});

export default null;
