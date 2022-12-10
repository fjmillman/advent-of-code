const calculateNumberOfLanternfish = (lanternfishTimers: number[]) => {
  for (let day = 0; day < 80; day++) {
    const currentNumberOfLanternfish = lanternfishTimers.length;
    for (let i = 0; i < currentNumberOfLanternfish; i++) {
      const lanternfishTimer = lanternfishTimers[i];

      if (lanternfishTimer > 0) {
        lanternfishTimers[i] = lanternfishTimer - 1;

        continue;
      }

      lanternfishTimers.push(8);
      lanternfishTimers[i] = 6;
    }
  }

  return lanternfishTimers.length;
};

export default calculateNumberOfLanternfish;
