import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day One", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 514579", () => {
      assertEquals(part1([1721, 979, 366, 299, 675, 1456]), 514579);
    });

    Rhum.testCase("should get 1010884", async () => {
      const input = (await getInput("day1")).split("\n").map(Number);
      assertEquals(part1(input), 1010884);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 241861950", () => {
      assertEquals(part2([1721, 979, 366, 299, 675, 1456]), 241861950);
    });

    Rhum.testCase("should get 253928438", async () => {
      const input = (await getInput("day1")).split("\n").map(Number);
      assertEquals(part2(input), 253928438);
    });
  });
});

Rhum.run();
