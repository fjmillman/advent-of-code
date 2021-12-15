import { ACTION_FORWARD, ACTION_UP } from '../constants';
import { parseCommand } from '../utils';

const calculatePositionAndDepth = (commands: string[]) => {
  let horizontalPosition = 0;
  let finalDepth = 0;

  for (const command of commands) {
    const [action, value] = parseCommand(command);

    if (action === ACTION_FORWARD) {
      horizontalPosition += value;
      continue;
    }

    finalDepth += action === ACTION_UP ? -value : value;
  }

  return horizontalPosition * finalDepth;
};

export default calculatePositionAndDepth;
