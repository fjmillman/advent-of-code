type LanternfishTimers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

const calculateNumberOfLanternfish = (lanternfish: number[]) => {
  let lanternfishTimers = lanternfish.reduce<LanternfishTimers>(
    (lanternfishTimers: LanternfishTimers, timer: number) => {
      lanternfishTimers[timer] = lanternfishTimers[timer] + 1;

      return lanternfishTimers;
    },
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  );

  for (let day = 0; day < 256; day++) {
    const newLanternfishTimers: LanternfishTimers = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < lanternfishTimers.length; i++) {
      const lanternfishTimer = lanternfishTimers[i];

      if (i > 0) {
        newLanternfishTimers[i - 1] =
          newLanternfishTimers[i - 1] + lanternfishTimer;

        continue;
      }

      newLanternfishTimers[6] = newLanternfishTimers[6] + lanternfishTimer;
      newLanternfishTimers[8] = lanternfishTimer;
    }

    lanternfishTimers = newLanternfishTimers;
  }

  return lanternfishTimers.reduce((total: number, x: number) => total + x, 0);
};

export default calculateNumberOfLanternfish;
