const getContiguousSet = (input: number[], target: number) => {
  for (let i = 0; i < input.length; i++) {
    const set = [input[i]];

    for (let j = i + 1; j < input.length; j++) {
      set.push(input[j]);

      if (set.reduce((acc, val) => acc + val, 0) === target) {
        return set.sort((a, b) => a - b);
      }
    }
  }
};

export const part1 = (input: number[], length: number): number | undefined => {
  return input.slice(length).find((value, index) => {
    const preamble = input.slice(index, index + length);
    return preamble.every((number) => !preamble.includes(value - number));
  });
};

export const part2 = (input: number[], length: number): number | undefined => {
  const invalidNumber = part1(input, length) ?? 0;
  const set = getContiguousSet(input, invalidNumber);
  return set ? set[0] + set[set.length - 1] : 0;
};
