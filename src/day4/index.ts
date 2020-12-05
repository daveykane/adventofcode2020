export const part1 = (input: string[]): number => {
  return input.reduce((valid, passport) => {
    const fields = passport.match(/(byr)|(iyr)|(eyr)|(hgt)|(hcl)|(ecl)|(pid)/g);
    return fields && fields.length === 7 ? valid + 1 : valid;
  }, 0);
};

export const part2 = (input: string[]): number => {
  return input.reduce((valid, passport) => {
    const fields = passport.match(
      /(byr:19[2-9]\d|byr:200[0-2])|(iyr:201\d|iyr:2020)|(eyr:202\d|eyr:2030)|(hgt:1[5-8]\dcm|hgt:19[0-3]cm)|(hgt:59in|hgt:6[0-9]in|hgt:7[0-6]in)|(hcl:#[0-9a-f]{6})|(ecl:amb|ecl:blu|ecl:brn|ecl:gry|ecl:grn|ecl:hzl|ecl:oth)|(pid:\d{9})\s|(pid:\d{9})$/g,
    );
    return fields && fields.length === 7 ? valid + 1 : valid;
  }, 0);
};
