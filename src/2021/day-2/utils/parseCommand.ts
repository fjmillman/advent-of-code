const parseCommand = (command: string): [string, number] => {
  const [action, value] = command.split(' ');

  return [action, parseInt(value)];
};

export default parseCommand;
