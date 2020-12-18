import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Seventeen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 112", async () => {
      const input = (await getInput("day17", "input_example")).split("\n");
      assertEquals(part1(input), 112);
    });

    Rhum.testCase("should get 324", async () => {
      const input = (await getInput("day17")).split("\n");
      assertEquals(part1(input), 324);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 848", async () => {
      const input = (await getInput("day17", "input_example")).split("\n");
      assertEquals(part2(input), 848);
    });

    Rhum.testCase("should get 1836", async () => {
      const input = (await getInput("day17")).split("\n");
      assertEquals(part2(input), 1836);
    });
  });
});

Rhum.run();
