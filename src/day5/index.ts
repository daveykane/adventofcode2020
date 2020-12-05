const findSeat = (directions: string[], [lower, upper]: number[]): number => {
  const direction = directions.shift();
  const change = ((upper - lower) + 1) / 2;
  lower = direction === "B" || direction === "R" ? lower + change : lower;
  upper = direction === "F" || direction === "L" ? upper - change : upper;
  return directions.length ? findSeat(directions, [lower, upper]) : lower;
};

const getSeatId = (seat: string): number => {
  const row = findSeat(seat.slice(0, 7).split(""), [0, 127]);
  const column = findSeat(seat.slice(7).split(""), [0, 7]);
  return row * 8 + column;
};

export const part1 = (input: string[]): number => {
  return input.reduce((highest, seat) => {
    const seatId = getSeatId(seat);
    return seatId > highest ? seatId : highest;
  }, 0);
};

export const part2 = (input: string[]): number => {
  const seats = input.map(getSeatId).sort((a, b) => a - b);
  const previousSeat = seats.find((seat, i) => seat + 1 !== seats[i + 1]);
  return (previousSeat ?? 0) + 1;
};
