import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Sixteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 71", async () => {
      const input = (await getInput("day16", "input_example1")).split("\n\n");
      assertEquals(part1(input), 71);
    });

    Rhum.testCase("should get 28882", async () => {
      const input = (await getInput("day16")).split("\n\n");
      assertEquals(part1(input), 28882);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 1429779530273", async () => {
      const input = (await getInput("day16")).split("\n\n");
      assertEquals(part2(input), 1429779530273);
    });
  });
});

Rhum.run();
