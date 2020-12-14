import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Fourteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 165", async () => {
      const input = (await getInput("day14", "input_example1")).split("\n");
      assertEquals(part1(input), 165);
    });

    Rhum.testCase("should get 14722016054794", async () => {
      const input = (await getInput("day14")).split("\n");
      assertEquals(part1(input), 14722016054794);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 208", async () => {
      const input = (await getInput("day14", "input_example2")).split("\n");
      assertEquals(part2(input), 208);
    });

    Rhum.testCase("should get 3618217244644", async () => {
      const input = (await getInput("day14")).split("\n");
      assertEquals(part2(input), 3618217244644);
    });
  });
});

Rhum.run();
