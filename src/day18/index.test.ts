import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Eighteen", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 71", async () => {
      assertEquals(part1(["1 + 2 * 3 + 4 * 5 + 6"]), 71);
    });

    Rhum.testCase("should get 51", async () => {
      assertEquals(part1(["1 + (2 * 3) + (4 * (5 + 6))"]), 51);
    });

    Rhum.testCase("should get 26", async () => {
      assertEquals(part1(["2 * 3 + (4 * 5)"]), 26);
    });

    Rhum.testCase("should get 437", async () => {
      assertEquals(part1(["5 + (8 * 3 + 9 + 3 * 4 * 3)"]), 437);
    });

    Rhum.testCase("should get 12240", async () => {
      assertEquals(part1(["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"]), 12240);
    });

    Rhum.testCase("should get 13632", async () => {
      const input = ["((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"];
      assertEquals(part1(input), 13632);
    });

    Rhum.testCase("should get 1408133923393", async () => {
      const input = (await getInput("day18")).split("\n");
      assertEquals(part1(input), 1408133923393);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 231", async () => {
      assertEquals(part2(["1 + 2 * 3 + 4 * 5 + 6"]), 231);
    });

    Rhum.testCase("should get 51", async () => {
      assertEquals(part2(["1 + (2 * 3) + (4 * (5 + 6))"]), 51);
    });

    Rhum.testCase("should get 46", async () => {
      assertEquals(part2(["2 * 3 + (4 * 5)"]), 46);
    });

    Rhum.testCase("should get 1445", async () => {
      assertEquals(part2(["5 + (8 * 3 + 9 + 3 * 4 * 3)"]), 1445);
    });

    Rhum.testCase("should get 669060", async () => {
      const input = ["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"];
      assertEquals(part2(input), 669060);
    });

    Rhum.testCase("should get 23340", async () => {
      const input = ["((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"];
      assertEquals(part2(input), 23340);
    });

    Rhum.testCase("should get 314455761823725", async () => {
      const input = (await getInput("day18")).split("\n");
      assertEquals(part2(input), 314455761823725);
    });
  });
});

Rhum.run();
