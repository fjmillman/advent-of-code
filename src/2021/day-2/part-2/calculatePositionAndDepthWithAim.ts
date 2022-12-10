import { ACTION_FORWARD, ACTION_UP } from '../constants';
import { parseCommand } from '../utils';

const calculatePositionAndDepthWithAim = (commands: string[]) => {
  let horizontalPosition = 0;
  let finalDepth = 0;
  let aim = 0;

  for (const command of commands) {
    const [action, value] = parseCommand(command);

    if (action === ACTION_FORWARD) {
      horizontalPosition += value;
      finalDepth += aim * value;
      continue;
    }

    aim += action === ACTION_UP ? -value : value;
  }

  return horizontalPosition * finalDepth;
};

export default calculatePositionAndDepthWithAim;
