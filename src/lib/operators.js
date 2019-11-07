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
  if (number < 0) {
    number = number * -1;
    counter = counter + 1;
  }
  if (number >= 0) {
    counter = counter + 1;
  }
  while (number / 10 >= 1) {
    number = number / 10;
    ++counter;
  }
  return counter;
}

// Alternative to count the characters of number
// export function countDigits(number) {
//   return number.toString().length;
// }
