import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Ten", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 35", async () => {
      const input = (await getInput("day10", "input_example1")).split("\n");
      assertEquals(part1(input.map(Number)), 35);
    });

    Rhum.testCase("should get 220", async () => {
      const input = (await getInput("day10", "input_example2")).split("\n");
      assertEquals(part1(input.map(Number)), 220);
    });

    Rhum.testCase("should get 2263", async () => {
      const input = (await getInput("day10")).split("\n");
      assertEquals(part1(input.map(Number)), 2263);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 8", async () => {
      const input = (await getInput("day10", "input_example1")).split("\n");
      assertEquals(part2(input.map(Number)), 8);
    });

    Rhum.testCase("should get 19208", async () => {
      const input = (await getInput("day10", "input_example2")).split("\n");
      assertEquals(part2(input.map(Number)), 19208);
    });

    Rhum.testCase("should get 396857386627072", async () => {
      const input = (await getInput("day10")).split("\n");
      assertEquals(part2(input.map(Number)), 396857386627072);
    });
  });
});

Rhum.run();
