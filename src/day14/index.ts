export const part1 = (program: string[][]): number => {
  let zeroVariantMask: bigint;
  let oneVariantMask: bigint;
  const memory = new Map();

  program.forEach(([item, value]) => {
    if (item === "mask") {
      zeroVariantMask = BigInt(parseInt(value.replaceAll("X", "0"), 2));
      oneVariantMask = BigInt(parseInt(value.replaceAll("X", "1"), 2));
      return;
    }

    const newValue = (BigInt(Number(value)) | zeroVariantMask) & oneVariantMask;

    memory.set(Number(item.slice(4, -1)), Number(newValue));
  });

  return [...memory.values()].reduce((sum, value) => sum + value, 0);
};

export const part2 = (program: string[][]): number => {
  let bitMask: string[];
  const memory = new Map();
  const getPermutations = (binary: string): string[] => {
    if (!binary.includes("X")) {
      return [binary];
    }

    const zeroVariant = binary.replace("X", "0");
    const oneVariant = binary.replace("X", "1");
    return [...getPermutations(zeroVariant), ...getPermutations(oneVariant)];
  };

  program.forEach(([item, value]) => {
    if (item === "mask") {
      bitMask = value.split("");
      return;
    }

    const address = Number(item.slice(4, -1)).toString(2).padStart(36, "0");
    const addressMasked = bitMask.map((bit, index) => {
      return bit === "0" ? address[index] : bit;
    }).join("");

    getPermutations(addressMasked).forEach((permutation: string) => {
      memory.set(parseInt(permutation, 2), Number(value));
    });
  });

  return [...memory.values()].reduce((sum, value) => sum + value, 0);
};
