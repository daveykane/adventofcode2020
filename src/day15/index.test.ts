import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Fifteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 436", () => {
      assertEquals(part1([0, 3, 6]), 436);
    });

    Rhum.testCase("should get 1", () => {
      assertEquals(part1([1, 3, 2]), 1);
    });

    Rhum.testCase("should get 10", () => {
      assertEquals(part1([2, 1, 3]), 10);
    });

    Rhum.testCase("should get 27", () => {
      assertEquals(part1([1, 2, 3]), 27);
    });

    Rhum.testCase("should get 78", () => {
      assertEquals(part1([2, 3, 1]), 78);
    });

    Rhum.testCase("should get 438", () => {
      assertEquals(part1([3, 2, 1]), 438);
    });

    Rhum.testCase("should get 1836", () => {
      assertEquals(part1([3, 1, 2]), 1836);
    });

    Rhum.testCase("should get 496", () => {
      assertEquals(part1([2, 0, 1, 7, 4, 14, 18]), 496);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 175594", () => {
      assertEquals(part2([0, 3, 6]), 175594);
    });

    Rhum.testCase("should get 2578", () => {
      assertEquals(part2([1, 3, 2]), 2578);
    });

    Rhum.testCase("should get 3544142", () => {
      assertEquals(part2([2, 1, 3]), 3544142);
    });

    Rhum.testCase("should get 261214", () => {
      assertEquals(part2([1, 2, 3]), 261214);
    });

    Rhum.testCase("should get 6895259", () => {
      assertEquals(part2([2, 3, 1]), 6895259);
    });

    Rhum.testCase("should get 18", () => {
      assertEquals(part2([3, 2, 1]), 18);
    });

    Rhum.testCase("should get 362", () => {
      assertEquals(part2([3, 1, 2]), 362);
    });

    Rhum.testCase("should get 883", () => {
      assertEquals(part2([2, 0, 1, 7, 4, 14, 18]), 883);
    });
  });
});

Rhum.run();
