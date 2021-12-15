import { readFileSync } from 'fs';

const parseLinesFromFile = (file: string) => {
  const input = readFileSync(file, 'utf-8');

  return input.split(/\r?\n/);
};

export default parseLinesFromFile;
