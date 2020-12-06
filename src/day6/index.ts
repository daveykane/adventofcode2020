const getAnswers = (answers: string): string[] => {
  return [...new Set(answers.match(/[a-z]{1}/gi))];
};

export const part1 = (input: string[]): number => {
  return input.reduce((count, group) => count + getAnswers(group).length, 0);
};

export const part2 = (input: string[]): number => {
  return input.reduce((count, group) => {
    const people = group.split("\n").map(getAnswers);
    const intersects = people.reduce((a, b) => a.filter((c) => b.includes(c)));
    return count + intersects.length;
  }, 0);
};
