interface IBags {
  [name: string]: IBagContents[];
}

interface IBagContents {
  amount: number;
  name: string;
}

const myBag = "shiny gold";

const processContents = (contents: string): IBagContents => {
  const regex = /^(?<amount>\d+) (?<name>.+) bag.*$/;
  const { groups = {} } = (contents.match(regex) ?? {});
  return { amount: Number(groups.amount), name: groups.name };
};

const processBags = (rules: string[]): IBags => {
  return rules.reduce((bags: IBags, rule: string) => {
    const [name, contains] = rule.split(" bags contain ");
    const contents = contains !== "no other bags." ? contains.split(", ") : [];
    return Object.assign(bags, { [name]: contents.map(processContents) });
  }, {});
};

const findBags = (name: string, bags: IBags): boolean => {
  return bags[name].some((bag) => {
    return bag.name === myBag || findBags(bag.name, bags);
  });
};

const countBags = (name: string, bags: IBags): number => {
  return bags[name].reduce((total, { amount, name }: IBagContents) => {
    return total + amount + (amount * countBags(name, bags));
  }, 0);
};

export const part1 = (rules: string[]): number => {
  const bags = processBags(rules);
  return Object.keys(bags).reduce((count: number, name: string) => {
    return count + Number(findBags(name, bags));
  }, 0);
};

export const part2 = (rules: string[]): number => {
  return countBags(myBag, processBags(rules));
};
