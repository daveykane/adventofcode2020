export const getInput = async (day: string): Promise<string> => {
  return (await Deno.readTextFile(`${Deno.cwd()}/src/${day}/input.txt`)).trim();
};
