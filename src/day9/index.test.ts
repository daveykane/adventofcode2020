import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Nine", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 127", async () => {
      const input = (await getInput("day9", "input_example")).split("\n");
      assertEquals(part1(input.map(Number), 5), 127);
    });

    Rhum.testCase("should get 375054920", async () => {
      const input = (await getInput("day9")).split("\n").map(Number);
      assertEquals(part1(input.map(Number), 25), 375054920);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 62", async () => {
      const input = (await getInput("day9", "input_example")).split("\n");
      assertEquals(part2(input.map(Number), 5), 62);
    });

    Rhum.testCase("should get 54142584", async () => {
      const input = (await getInput("day9")).split("\n");
      assertEquals(part2(input.map(Number), 25), 54142584);
    });
  });
});

Rhum.run();
