const evaluate = (expression: string, precedences: RegExp[]): string => {
  while (expression.match(/\(/)) {
    expression = expression.replace(/\([^()]+\)/, (str: string) => {
      return evaluate(str.slice(1, str.length - 1), precedences);
    });
  }

  precedences.forEach((precedence) => {
    while (expression.match(precedence)) {
      expression = expression.replace(precedence, (_, a, op, b) => {
        return (op === "+" ? +a + +b : +a * +b).toString();
      });
    }
  });

  return expression;
};

export const part1 = (expressions: string[]): number => {
  return expressions.reduce((total, expression) => {
    return total + +evaluate(expression, [/(\d+) ([+*]) (\d+)/]);
  }, 0);
};

export const part2 = (expressions: string[]): number => {
  const precedences = [/(\d+) (\+) (\d+)/, /(\d+) (\*) (\d+)/];
  return expressions.reduce((total, expression) => {
    return total + +evaluate(expression, precedences);
  }, 0);
};
