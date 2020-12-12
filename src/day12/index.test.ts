import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Twelve", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 25", () => {
      assertEquals(part1(["F10", "N3", "F7", "R90", "F11"]), 25);
    });

    Rhum.testCase("should get 415", async () => {
      const input = (await getInput("day12")).split("\n");
      assertEquals(part1(input), 415);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 286", () => {
      assertEquals(part2(["F10", "N3", "F7", "R90", "F11"]), 286);
    });

    Rhum.testCase("should get 29401", async () => {
      const input = (await getInput("day12")).split("\n");
      assertEquals(part2(input), 29401);
    });
  });
});

Rhum.run();
