const playGame = (numbers: number[], turns: number): number => {
  let last = 0;
  let i = numbers.length + 1;
  const tracker = Array(turns).fill(-1);

  numbers.forEach((number, index) => tracker[number] = index);

  while (i < turns) {
    const lastSpokenIndex = tracker[last];
    tracker[last] = i - 1;
    last = lastSpokenIndex === -1 ? 0 : i - 1 - lastSpokenIndex;
    i++;
  }

  return last;
};

export const part1 = (numbers: number[]): number => playGame(numbers, 2020);
export const part2 = (numbers: number[]): number => playGame(numbers, 30000000);
