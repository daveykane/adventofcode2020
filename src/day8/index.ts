import { deepClone } from "../utils/index.ts";

interface IInstruction {
  op: string;
  arg: number;
  executed?: boolean;
}

interface IProgramOutput {
  value: number;
  success: boolean;
}

const getInstructions = (input: string[]): IInstruction[] => {
  return input.map((instruction) => {
    const [op, arg] = instruction.split(" ");
    return { op, arg: Number(arg) };
  });
};

const getNewInstructions = (
  instructions: IInstruction[],
  index: number,
): IInstruction[] => {
  const newOp = instructions[index].op === "nop" ? "jmp" : "nop";
  const newInstructions = deepClone(instructions);
  newInstructions[index].op = newOp;
  return newInstructions;
};

const runProgram = (instructions: IInstruction[]) => {
  let value = 0;
  let success = true;

  for (let i = 0; i < instructions.length; i++) {
    const { op, arg } = instructions[i];

    instructions[i].executed = true;
    value += op === "acc" ? arg : 0;
    i += op === "jmp" ? arg - 1 : 0;

    const { executed } = instructions[i + 1] || {};

    if (executed) {
      success = false;
      break;
    }
  }

  return { value, success };
};

export const part1 = (input: string[]): IProgramOutput => {
  return runProgram(getInstructions(input));
};

export const part2 = (input: string[]): number => {
  let result = 0;
  const instructions = getInstructions(input);

  for (const [index, instruction] of instructions.entries()) {
    if (instruction.op !== "acc") {
      const newInstructions = getNewInstructions(instructions, index);
      const { value, success } = runProgram(newInstructions);

      if (success) {
        result = value;
        break;
      }
    }
  }

  return result;
};
