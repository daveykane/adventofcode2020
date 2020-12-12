const headings: any = { 0: [0, -1], 90: [1, 0], 180: [0, 1], 270: [-1, 0] };
const directions: any = { "N": 0, "E": 90, "S": 180, "W": 270 };

export const part1 = (instructions: string[]): number => {
  let currentHeading: number = 90;
  const ship: number[] = [0, 0];

  return instructions.reduce((distance: number, command: string) => {
    const [action, value] = [command.slice(0, 1), Number(command.slice(1))];

    if (action === "R") {
      currentHeading = (currentHeading + value) % 360;
    } else if (action === "L") {
      currentHeading = (((currentHeading - value) % 360) + 360) % 360;
    } else {
      const heading = action === "F" ? currentHeading : directions[action];
      ship[0] += headings[heading][0] * value;
      ship[1] += headings[heading][1] * value;
    }

    return Math.abs(ship[0]) + Math.abs(ship[1]);
  }, 0);
};

export const part2 = (instructions: string[]): number => {
  let waypoint: number[] = [10, -1];
  const ship: number[] = [0, 0];

  return instructions.reduce((distance: number, command: string) => {
    const [action, value] = [command.slice(0, 1), Number(command.slice(1))];

    if (action === "R" || action === "L") {
      for (let angle = value / 90; angle > 0; angle--) {
        const [x, y] = waypoint;
        waypoint = action === "R" ? [-y, x] : [y, -x];
      }
    } else if (action === "F") {
      ship[0] += waypoint[0] * value;
      ship[1] += waypoint[1] * value;
    } else {
      waypoint[0] += headings[directions[action]][0] * value;
      waypoint[1] += headings[directions[action]][1] * value;
    }

    return Math.abs(ship[0]) + Math.abs(ship[1]);
  }, 0);
};
