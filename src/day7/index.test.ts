import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Seven", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 4", async () => {
      const input = (await getInput("day7", "input_example1")).split("\n");
      assertEquals(part1(input), 4);
    });

    Rhum.testCase("should get 144", async () => {
      const input = (await getInput("day7")).split("\n");
      assertEquals(part1(input), 144);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 32", async () => {
      const input = (await getInput("day7", "input_example1")).split("\n");
      assertEquals(part2(input), 32);
    });

    Rhum.testCase("should get 126", async () => {
      const input = (await getInput("day7", "input_example2")).split("\n");
      assertEquals(part2(input), 126);
    });

    Rhum.testCase("should get 5956", async () => {
      const input = (await getInput("day7")).split("\n");
      assertEquals(part2(input), 5956);
    });
  });
});

Rhum.run();
