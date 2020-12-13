import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Thirteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 295", async () => {
      const input = (await getInput("day13", "input_example")).split("\n");
      assertEquals(part1(input), 295);
    });

    Rhum.testCase("should get 3464", async () => {
      const input = (await getInput("day13")).split("\n");
      assertEquals(part1(input), 3464);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 1068781", async () => {
      const input = (await getInput("day13", "input_example")).split("\n");
      assertEquals(part2(input[1].split(",").map(Number)), 1068781);
    });

    Rhum.testCase("should get 760171380521445", async () => {
      const input = (await getInput("day13")).split("\n");
      assertEquals(part2(input[1].split(",").map(Number)), 760171380521445);
    });
  });
});

Rhum.run();
