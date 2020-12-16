const toNumArray = (str: string) => str.split(",").map((num) => Number(num));

const isNumInRange = (ranges: { min: number; max: number }[], num: number) => {
  return ranges.some(({ min, max }) => min <= num && num <= max);
};

const parseInput = ([rulesText, myTicketText, nearbyText]: string[]) => {
  const [myTicket] = myTicketText.split("\n").slice(1).map(toNumArray);
  const tickets = nearbyText.split("\n").slice(1).map(toNumArray);
  const rules = rulesText.split("\n").map((text) => {
    const [name, rangeText] = text.split(": ");
    const ranges = rangeText.split(" or ").map((rangeText) => {
      const [min, max] = rangeText.split("-");
      return { min: Number(min), max: Number(max) };
    });

    return { name, ranges };
  });

  return { rules, myTicket, tickets };
};

export const part1 = (input: string[]): number => {
  const { rules, tickets } = parseInput(input);
  const ranges = rules.map(({ ranges }) => ranges).flat();
  const invalid = tickets.flat().filter((num) => !isNumInRange(ranges, num));
  return invalid.reduce((sum, num) => sum + num, 0);
};

export const part2 = (input: string[]): number => {
  const { rules, myTicket, tickets } = parseInput(input);
  const invalidRulesByPos = rules.map(() => new Set());
  const validTickets = tickets.filter((numbers) => {
    return numbers.every((number) => {
      return rules.some(({ ranges }) => isNumInRange(ranges, number));
    });
  });

  validTickets.forEach((numbers) => {
    numbers.forEach((number, pos) => {
      rules.forEach(({ name, ranges }) => {
        if (!isNumInRange(ranges, number)) invalidRulesByPos[pos].add(name);
      });
    });
  });

  const allRuleNames = rules.map((rule) => rule.name);
  const posByRuleName = invalidRulesByPos.map((invalidRules, pos) => {
    const ruleNames = allRuleNames.filter((name) => !invalidRules.has(name));
    return { pos, ruleNames };
  });

  const processedPosByRuleName = posByRuleName
    .sort((a, b) => a.ruleNames.length - b.ruleNames.length)
    .reduce((posByRuleName: { [name: string]: number }, { pos, ruleNames }) => {
      const [ruleName] = ruleNames.filter((name) => !posByRuleName[name]);
      return Object.assign(posByRuleName, { [ruleName]: pos });
    }, {});

  return Object.entries(processedPosByRuleName)
    .filter(([ruleName]) => ruleName.startsWith("departure"))
    .map(([, pos]) => myTicket[pos])
    .reduce((acc, num) => acc * num, 1);
};
