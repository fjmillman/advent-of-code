import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { parseLinesFromFile } from '../../utils';
import calculatePositionAndDepth from './calculatePositionAndDepthWithAim';

const commands = parseLinesFromFile(join(__dirname, './input.txt'));

const positionAndDepth = calculatePositionAndDepth(commands);

console.log(positionAndDepth);
