const getHits = ([x, y]: number[], grid: string[]): number => {
  let xIndex = 0;
  let hits = 0;
  const len = grid[0].length - 1;

  for (let i = y; i < grid.length; i += y) {
    xIndex = xIndex + x > len ? xIndex + x - len - 1 : xIndex + x;
    hits = grid[i][xIndex] === "#" ? hits + 1 : hits;
  }

  return hits;
};

export const part1 = (grid: string[], jump: number[]): number => {
  return getHits(jump, grid);
};

export const part2 = (grid: string[], jumps: number[][]): number => {
  return jumps.reduce((totalHits, jump) => {
    return totalHits * getHits(jump, grid);
  }, 1);
};
