import { sum } from "./operators";
test("adds 1 + 2 to equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

import { sub } from "./operators";
test("adds (-1) + (-2) to equal -3", function() {
  const result = sub(-1, -2);
  expect(result).toBe(1);
});

// import { div } from "./operators";
// test("adds 4 / 2 to equal 2", function() {
//   const result = sub(4, 2);
//   expect(result).toBe(2);
// });

test("count digits of number 231", function() {
  const result = countDigits(231);
  expect(result).toBe(3);
});

test("count digits of number 1234567", function() {
  const result = countDigits(1234567);
  expect(result).toBe(7);
});

test("count digits of number 1234", function() {
  const result = countDigits(1234);
  expect(result).toBe(4);
});
