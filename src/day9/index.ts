const getPreamble = (input: number[], pointer: number, length: number) => {
  const list = input.slice(pointer, pointer + length);
  const set = new Set();

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j) {
        set.add(list[i] + list[j]);
      }
    }
  }

  return [...set];
};

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
    return !getPreamble(input, index, length).includes(value);
  });
};

export const part2 = (input: number[], length: number): number | undefined => {
  const invalidNumber = part1(input, length) ?? 0;
  const set = getContiguousSet(input, invalidNumber);
  return set ? set[0] + set[set.length - 1] : 0;
};
