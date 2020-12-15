const playGame = (numbers: number[], turns: number): number => {
  const tracker = new Map();

  numbers.forEach((number, index) => {
    tracker.set(number, { last: index + 1, prev: null });
    tracker.set("last", number);
  });

  for (let i = tracker.size; i <= turns; i++) {
    const { last, prev } = tracker.get(tracker.get("last"));
    const value = prev ? last - prev : 0;
    const isNew = tracker.get(value);
    tracker.set(value, { last: i, prev: isNew ? isNew.last : null });
    tracker.set("last", value);
  }

  return tracker.get("last");
};

export const part1 = (numbers: number[]): number => playGame(numbers, 2020);
export const part2 = (numbers: number[]): number => playGame(numbers, 30000000);
