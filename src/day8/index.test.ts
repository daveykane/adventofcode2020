import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Eight", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 5", async () => {
      const input = (await getInput("day8", "input_example")).split("\n");
      const { value } = part1(input);
      assertEquals(value, 5);
    });

    Rhum.testCase("should get 1782", async () => {
      const input = (await getInput("day8")).split("\n");
      const { value } = part1(input);
      assertEquals(value, 1782);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 8", async () => {
      const input = (await getInput("day8", "input_example")).split("\n");
      assertEquals(part2(input), 8);
    });

    Rhum.testCase("should get 797", async () => {
      const input = (await getInput("day8")).split("\n");
      assertEquals(part2(input), 797);
    });
  });
});

Rhum.run();
