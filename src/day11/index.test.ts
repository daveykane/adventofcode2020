import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Eleven", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 37", async () => {
      const input = (await getInput("day11", "input_example")).split("\n");
      assertEquals(part1(input), 37);
    });

    Rhum.testCase("should get 2470", async () => {
      const input = (await getInput("day11")).split("\n");
      assertEquals(part1(input), 2470);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 26", async () => {
      const input = (await getInput("day11", "input_example")).split("\n");
      assertEquals(part2(input), 26);
    });

    Rhum.testCase("should get 2259", async () => {
      const input = (await getInput("day11")).split("\n");
      assertEquals(part2(input), 2259);
    });
  });
});

Rhum.run();
