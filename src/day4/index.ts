const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const hasRequiredFields = (passport: string): boolean => {
  return required.every((field) => {
    const regex = new RegExp(`${field}:`);
    return passport.match(regex);
  });
};

export const part1 = (input: string[]): number => {
  return input.reduce((count, passport) => {
    return hasRequiredFields(passport) ? count + 1 : count;
  }, 0);
};

export const part2 = (input: string[]): number => {
  return input.reduce((count, passport) => {
    if (!hasRequiredFields(passport)) {
      return count;
    }

    const hgtCm = passport.match(/(hgt:1[5-8]\dcm|hgt:19[0-3]cm)(\s|$)/);
    const hgtIn = passport.match(/(hgt:59in|hgt:6[0-9]in|hgt:7[0-6]in)(\s|$)/);
    const ecl = passport.match(/(ecl:)(amb|blu|brn|gry|grn|hzl|oth)(\s|$)/);

    if ((!hgtCm && !hgtIn) || !ecl) return count;
    if (!passport.match(/(byr:19[2-9]\d|byr:200[0-2])(\s|$)/)) return count;
    if (!passport.match(/(iyr:201\d|iyr:2020)(\s|$)/)) return count;
    if (!passport.match(/(eyr:202\d|eyr:2030)(\s|$)/)) return count;
    if (!passport.match(/(hcl:#[0-9a-f]{6})(\s|$)/)) return count;
    if (!passport.match(/(pid:\d{9})(\s|$)/)) return count;

    return count + 1;
  }, 0);
};
