import { numericalSort } from "../utils/index.ts";

const getSeatId = (seat: string): number => {
  return parseInt(seat.replace(/[FL]/g, "0").replace(/[RB]/g, "1"), 2);
};

export const part1 = (input: string[]): number => {
  return Math.max(...input.map(getSeatId));
};

export const part2 = (input: string[]): number => {
  const seats = numericalSort(input.map(getSeatId));
  return (seats.find((seat, i) => seat + 1 !== seats[i + 1]) ?? 0) + 1;
};
