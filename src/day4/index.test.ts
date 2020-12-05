import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Four", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 2", async () => {
      const input = (await getInput("day4", "input_example1")).split("\n\n");
      assertEquals(part1(input), 2);
    });

    Rhum.testCase("should get 245", async () => {
      const input = (await getInput("day4")).split("\n\n");
      assertEquals(part1(input), 245);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 4", async () => {
      const input = (await getInput("day4", "input_example2")).split("\n\n");
      assertEquals(part2(input), 4);
    });

    Rhum.testCase("should get 133", async () => {
      const input = (await getInput("day4")).split("\n\n");
      assertEquals(part2(input), 133);
    });
  });
});

Rhum.run();
