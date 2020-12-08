export const part1 = (input: number[]): number | undefined => {
  for (let i = 0; i < input.length; i++) {
    const diff = 2020 - input[i];
    if (input.includes(diff)) {
      return input[i] * diff;
    }
  }
};

export const part2 = (input: number[]): number | undefined => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i !== j) {
        const diff = 2020 - input[i] - input[j];
        if (input.includes(diff)) {
          return input[i] * input[j] * diff;
        }
      }
    }
  }
};
