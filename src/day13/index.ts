export const part1 = ([time, times]: string[]): number => {
  const timestamp = Number(time);
  const buses = times.split(",").filter((bus) => bus !== "x").map(Number);
  let shortestWait = Infinity;

  return buses.reduce((result: any, bus: number) => {
    const waitTime = (Math.ceil(timestamp / bus) * bus) - timestamp;

    if (waitTime < shortestWait) {
      shortestWait = waitTime;
      return waitTime * bus;
    }

    return result;
  }, 0);
};

export const part2 = (buses: number[]): number => {
  let step = 1;

  return buses.reduce((timestamp, bus, index) => {
    if (!Number.isNaN(bus)) {
      while ((timestamp + index) % bus !== 0) {
        timestamp += step;
      }

      step *= bus;
    }
    return timestamp;
  }, step);
};
