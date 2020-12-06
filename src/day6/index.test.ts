import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Six", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 11", async () => {
      const input = (await getInput("day6", "input_example")).split("\n\n");
      assertEquals(part1(input), 11);
    });

    Rhum.testCase("should get 6742", async () => {
      const input = (await getInput("day6")).split("\n\n");
      assertEquals(part1(input), 6742);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 6", async () => {
      const input = (await getInput("day6", "input_example")).split("\n\n");
      assertEquals(part2(input), 6);
    });

    Rhum.testCase("should get 3447", async () => {
      const input = (await getInput("day6")).split("\n\n");
      assertEquals(part2(input), 3447);
    });
  });
});

Rhum.run();
