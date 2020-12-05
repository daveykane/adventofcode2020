import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Five", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 357", () => {
      assertEquals(part1(["FBFBBFFRLR"]), 357);
    });

    Rhum.testCase("should get 820", () => {
      assertEquals(
        part1(["FBFBBFFRLR", "BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"]),
        820,
      );
    });

    Rhum.testCase("should get 955", async () => {
      const input = (await getInput("day5")).split("\n");
      assertEquals(part1(input), 955);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 569", async () => {
      const input = (await getInput("day5")).split("\n");
      assertEquals(part2(input), 569);
    });
  });
});

Rhum.run();
