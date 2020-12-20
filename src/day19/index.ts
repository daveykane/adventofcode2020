interface IRules {
  [ruleNum: string]: string;
}

const processRules = (rules: string[]): IRules => {
  return Object.fromEntries(rules.map((rule) => rule.split(": ")));
};

const buildRegex = (rule: string, rules: IRules, next: number[]): string => {
  let [i, n8, n11] = next;

  if (n8 !== undefined && n11 !== undefined) {
    if (i === 8 && n8 === 5) {
      return `(${buildRegex(rules[42], rules, [42, n8, n11])})`;
    }

    if (i === 11 && n11 === 5) {
      const regex = buildRegex(rules[42], rules, [42, n8, n11]);
      return `(${regex}${buildRegex(rules[31], rules, [31, n8, n11])})`;
    }

    n8 += Number(i === 8);
    n11 += Number(i === 11);
  }

  if (rule.startsWith('"')) return rule.replaceAll('"', "");

  return `(${
    rule.split(" ").reduce((rule: string, part: string) => {
      const next = [Number(part), n8, n11];
      return rule + (part === "|" ? "|" : buildRegex(rules[part], rules, next));
    }, "")
  })`;
};

export const part1 = ([rules, messages]: string[]): number => {
  const processed = processRules(rules.split("\n"));
  const regex = buildRegex(processed[0], processed, []);
  return (messages.match(new RegExp(`^${regex}$`, "gm")) ?? []).length;
};

export const part2 = ([rules, messages]: string[]): number => {
  rules = rules.replace("8: 42", "8: 42 | 42 8");
  rules = rules.replace("11: 42 31", "11: 42 31 | 42 11 31");
  const processed = processRules(rules.split("\n"));
  const regex = buildRegex(processed[0], processed, [0, 0, 0]);
  return (messages.match(new RegExp(`^${regex}$`, "gm")) ?? []).length;
};
