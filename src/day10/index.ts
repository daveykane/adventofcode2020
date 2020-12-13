import { numericalSort } from "../utils/index.ts";

const getJoltageJumps = (input: number[]): string => {
  const adapters = numericalSort(input);
  const list = [0, ...adapters, Math.max(...adapters) + 3];
  return list.reduce((acc, val, index) => {
    return !list[index - 1] ? acc : acc + (val - list[index - 1]).toString();
  }, "1");
};

export const part1 = (input: number[]): number => {
  const jumps = getJoltageJumps(input);
  return (jumps.match(/1/g) ?? []).length * (jumps.match(/3/g) ?? []).length;
};

export const part2 = (input: number[]): number => {
  const jumps = getJoltageJumps(input);
  return jumps.split("3").reduce((total, val) => {
    switch (val.length) {
      case 4:
        return total * 7;
      case 3:
        return total * 4;
      case 2:
        return total * 2;
      default:
        return total;
    }
  }, 1);
};
