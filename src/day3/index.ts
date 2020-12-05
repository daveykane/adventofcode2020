const getHits = ([x, y]: number[], grid: string[]): number => {
  let hits = 0;
  for (let i = y, xIndex = x; i < grid.length; i += y, xIndex += x) {
    hits = grid[i][xIndex % grid[0].length] === "#" ? hits + 1 : hits;
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
