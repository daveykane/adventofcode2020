import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Nineteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 2", async () => {
      const input = (await getInput("day19", "input_example1")).split("\n\n");
      assertEquals(part1(input), 2);
    });

    Rhum.testCase("should get 216", async () => {
      const input = (await getInput("day19")).split("\n\n");
      assertEquals(part1(input), 216);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 12", async () => {
      const input = (await getInput("day19", "input_example2")).split("\n\n");
      assertEquals(part2(input), 12);
    });

    Rhum.testCase("should get 400", async () => {
      const input = (await getInput("day19")).split("\n\n");
      assertEquals(part2(input), 400);
    });
  });
});

Rhum.run();
