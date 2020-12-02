const getPolicy = (
  password: string,
): { min: number; max: number; char: string; pass: string } => {
  const match = password.match(/^(\d+)-(\d+) ([a-z]): ([a-z]+)$/);
  return match
    ? { min: +match[1], max: +match[2], char: match[3], pass: match[4] }
    : { min: 0, max: 0, char: "", pass: "" };
};

export const part1 = (input: string[]): number => {
  return input.reduce((acc, value) => {
    const { min, max, char, pass } = getPolicy(value);
    const count = pass.split(char).length - 1;
    return count >= min && count <= max ? acc + 1 : acc;
  }, 0);
};

export const part2 = (input: string[]): number => {
  return input.reduce((acc, value) => {
    const { min, max, char, pass } = getPolicy(value);
    const foundMin = pass[min - 1] === char;
    const foundMax = pass[max - 1] === char;
    return (foundMin && !foundMax) || (!foundMin && foundMax) ? acc + 1 : acc;
  }, 0);
};
