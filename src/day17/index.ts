const directions = [-1, 0, 1];
const searchDirections = directions.flatMap((x) => {
  return directions.flatMap((y) => {
    return directions.flatMap((z) => directions.map((w) => ({ x, y, z, w })));
  });
}).filter(({ x, y, z, w }) => !(x === 0 && y === 0 && z === 0 && w === 0));

const createGrid = (input: string[]): Map<string, boolean> => {
  return input.reduce((grid, line, y) => {
    line.split("").forEach((char, x) => {
      grid.set([x, y, 0, 0].join(","), char === "#");
    });

    return grid;
  }, new Map());
};

const getNeighbours = (grid: Map<string, boolean>, [x, y, z, w]: number[]) => {
  return searchDirections.reduce((count, dir) => {
    const key = [x + dir.x, y + dir.y, z + dir.z, w + dir.w].join(",");
    return grid.get(key) === true ? count + 1 : count;
  }, 0);
};

function simulate(input: string[], is4d: boolean = false) {
  let grid = createGrid(input);
  const r = { min: 0, max: 0 };
  const ranges: any = { x: { ...r }, y: { ...r }, z: { ...r }, w: { ...r } };

  for (let cycles = 0; cycles < 6; cycles++) {
    for (let key of grid.keys()) {
      const [x, y, z, w] = key.split(",").map(Number);
      const coords: any = { x, y, z, w };
      Object.keys(ranges).forEach((key) => {
        ranges[key].min = Math.min(coords[key], ranges[key].min);
        ranges[key].max = Math.max(coords[key], ranges[key].max);
      });
    }

    const nextGrid = new Map();

    for (let w = ranges.w.min - 1; w <= ranges.w.max + 1; w++) {
      const simulate3d = !is4d && w !== 0;
      if (simulate3d) continue;

      for (let z = ranges.z.min - 1; z <= ranges.z.max + 1; z++) {
        for (let y = ranges.y.min - 1; y <= ranges.y.max + 1; y++) {
          for (let x = ranges.x.min - 1; x <= ranges.x.max + 1; x++) {
            const coords = [x, y, z, simulate3d ? 0 : w];
            const activeNeighbors = getNeighbours(grid, coords);
            const key = coords.join(",");
            const isActive = grid.get(key);

            if (isActive && activeNeighbors !== 2 && activeNeighbors !== 3) {
              nextGrid.set(key, false);
            } else if (!isActive && activeNeighbors === 3) {
              nextGrid.set(key, true);
            } else {
              nextGrid.set(key, isActive);
            }
          }
        }
      }
    }

    grid = nextGrid;
  }

  return [...grid].reduce((count, [, isActive]) => {
    return isActive ? count + 1 : count;
  }, 0);
}

export const part1 = (input: string[]): number => simulate(input);
export const part2 = (input: string[]): number => simulate(input, true);
