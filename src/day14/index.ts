export const part1 = (input: string[]): number => {
  let mask: string[];
  const memory: number[] = [];

  input.forEach((line) => {
    const [cmd, val] = line.split(" = ");

    if (cmd === "mask") {
      mask = val.split("").reverse();
    } else {
      const [, position] = cmd.match(/^mem\[(\d+)\]$/) ?? [];

      if (position) {
        const number = Number(val);
        memory[Number(position)] = mask.reduce((a, v, i) => {
          if (v === "X") {
            return a;
          }

          const binary = number.toString(2).split("").reverse();
          const bit = Math.pow(2, i);

          if ((binary[i] ?? "0") === mask[i]) {
            return a;
          }

          return v === "0" ? a - bit : a + bit;
        }, number);
      }
    }
  });

  return memory.reduce((sum, value) => sum + value, 0);
};

export const part2 = (input: string[]): number => {
  let mask: string[];
  const memory: any = {};

  input.forEach((line) => {
    const [cmd, val] = line.split(" = ");

    if (cmd === "mask") {
      mask = val.split("").reverse();
    } else {
      const [, position] = cmd.match(/^mem\[(\d+)\]$/) ?? [];

      if (position) {
        let addresses: number[] = [0];
        const pos = Number(position);
        const binary = pos.toString(2).split("").reverse();

        const newBinary = mask.map((bit, i) => {
          return bit !== "0" ? bit : binary[i] ?? "0";
        });

        newBinary.forEach((bit, index) => {
          if (bit !== "0") {
            const bitValue = Math.pow(2, index);
            const newAddresses = addresses.map((address) => address + bitValue);

            if (bit === "1") {
              addresses = newAddresses;
            } else if (bit === "X") {
              addresses = addresses.concat(newAddresses);
            }
          }
        });

        addresses.forEach((address) => {
          memory[address] = Number(val);
        });
      }
    }
  });

  return Object.keys(memory).reduce((sum, key) => sum + memory[key], 0);
};
