export const getInput = async (
  day: string,
  file: string = "input",
): Promise<string> => {
  const text = await Deno.readTextFile(`${Deno.cwd()}/src/${day}/${file}.txt`);
  return text.trim();
};

export const deepClone = (value: object) => JSON.parse(JSON.stringify(value));
