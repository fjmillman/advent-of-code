import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { parseLinesFromFile } from '../../utils';
import calculatePositionAndDepthWithAim from './calculatePositionAndDepthWithAim';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('it calculates the position and depth correctly', () => {
  const commands = parseLinesFromFile(join(__dirname, '../test.txt'));

  const positionAndDepth = calculatePositionAndDepthWithAim(commands);

  expect(positionAndDepth).toBe(900);
});

export default null;
