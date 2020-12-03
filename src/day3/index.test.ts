import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Three", () => {
  Rhum.testSuite("Part One", () => {
    const jump = [3, 1];

    Rhum.testCase("should get 7", async () => {
      const input = (await getInput("day3", "input_example")).split("\n");
      assertEquals(part1(input, jump), 7);
    });

    Rhum.testCase("should get 232", async () => {
      const input = (await getInput("day3")).split("\n");
      assertEquals(part1(input, jump), 232);
    });
  });

  Rhum.testSuite("Part Two", () => {
    const jumps = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

    Rhum.testCase("should get 336", async () => {
      const input = (await getInput("day3", "input_example")).split("\n");
      assertEquals(part2(input, jumps), 336);
    });

    Rhum.testCase("should get 3952291680", async () => {
      const input = (await getInput("day3")).split("\n");
      assertEquals(part2(input, jumps), 3952291680);
    });
  });
});

Rhum.run();
