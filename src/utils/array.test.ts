import { test, assert } from "vitest";
import { range } from "./array";

test("range 1 to 5", () =>
  assert.sameOrderedMembers(range(1, 5), [1, 2, 3, 4, 5]));

test("range 1 to 5 step 0.5", () =>
  assert.sameOrderedMembers(
    range(1, 5, 0.5),
    [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  ));

test("range 1 to 5 step 2", () =>
  assert.sameOrderedMembers(range(1, 5, 2), [1, 3, 5]));

test("range 1 to 5 step 3", () =>
  assert.sameOrderedMembers(range(1, 5, 3), [1, 4]));
