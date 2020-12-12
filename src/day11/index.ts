const up = [[-1, -1], [-1, 0], [-1, 1]];
const sides = [[0, -1], [0, 1]];
const down = [[1, -1], [1, 0], [1, 1]];
const seats = [...up, ...sides, ...down];

const isInArea = ([y, x]: number[], [yLen, xLen]: number[]) => {
  return y >= 0 && y <= yLen && x >= 0 && x <= xLen;
};

const search = (grid: string[], [y, x]: number[], canSee: boolean): number => {
  let yLen = grid.length - 1;
  let xLen = grid[y].length - 1;

  return seats.reduce((occupied, [row, column]) => {
    let newY = y + row;
    let newX = x + column;

    while (isInArea([newY, newX], [yLen, xLen])) {
      if (grid[newY][newX] === "#") occupied++;
      if (grid[newY][newX] !== "." || !canSee) break;

      newY += row;
      newX += column;
    }

    return occupied;
  }, 0);
};

const getNewSeat = (seat: string, occupied: number, limit: number) => {
  const isFree = seat === "L" && occupied === 0;
  return isFree ? "#" : (seat === "#" && occupied >= limit ? "L" : seat);
};

const move = (layout: string[], limit: number, canSee: boolean): number => {
  let occupiedSeats = 0;

  while (true) {
    const newLayout: string[] = [];

    occupiedSeats = 0;
    layout.forEach((row, y) => {
      newLayout[y] = "";

      row.split("").forEach((seat, x) => {
        newLayout[y] += getNewSeat(seat, search(layout, [y, x], canSee), limit);
        if (newLayout[y][x] === "#") occupiedSeats++;
      });
    });

    const noChanges = JSON.stringify(layout) === JSON.stringify(newLayout);

    if (noChanges) return occupiedSeats;
    else layout = newLayout;
  }
};

export const part1 = (layout: string[]) => move(layout, 4, false);
export const part2 = (layout: string[]) => move(layout, 5, true);
