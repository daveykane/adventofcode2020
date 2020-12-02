import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Two", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 2", () => {
      const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
      assertEquals(part1(input), 2);
    });

    Rhum.testCase("should get 396", async () => {
      const input = (await getInput("day2")).split("\n");
      assertEquals(part1(input), 396);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 1", () => {
      const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
      assertEquals(part2(input), 1);
    });

    Rhum.testCase("should get 428", async () => {
      const input = (await getInput("day2")).split("\n");
      assertEquals(part2(input), 428);
    });
  });
});

Rhum.run();
