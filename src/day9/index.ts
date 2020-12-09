export const part1 = (input: number[], length: number): number | undefined => {
  return input.slice(length).find((value, index) => {
    const preamble = input.slice(index, index + length);
    return preamble.every((number) => !preamble.includes(value - number));
  });
};

export const part2 = (input: number[], length: number): number | undefined => {
  const invalidNumber = part1(input, length) ?? 0;

  for (let i = 0; i < input.length; i++) {
    let sum = input[i];
    const set = [input[i]];

    for (let j = i + 1; j < input.length; j++) {
      sum += input[j];
      set.push(input[j]);
      if (sum === invalidNumber) return Math.min(...set) + Math.max(...set);
    }
  }
};
