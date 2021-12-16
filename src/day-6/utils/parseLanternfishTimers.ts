const parseLanternfishTimers = (lines: string[]): number[] =>
  lines[0].split(',').map((timer: string) => parseInt(timer));

export default parseLanternfishTimers;
