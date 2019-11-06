export function sum(a, b) {
  return a + b;
}
export function multi(a, b) {
  return a * b;
}
export function sub(a, b) {
  return a - b;
}
export function div(a, b) {
  return a / b;
}

export function countDigits(number) {
  let counter = 0;
  if (number >= 1) ++counter;
  while (number / 10 >= 1) {
    number /= 10;
    ++counter;
  }
  return counter;
}
