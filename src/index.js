"use strict";

import { sum, sub, multi, div } from "./lib/operators";
import { changecolor } from "./lib/design";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multiButton = document.querySelector(".multi");
const divButton = document.querySelector(".div");

function getInput() {
  const firstInput = document.querySelector("[name=first]");
  const secondInput = document.querySelector("[name=second]");
  return {
    first: a,
    second: b
  };
}

sumButton.addEventListener("click", function() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  result.innerHTML = sum(firstInt, secondInt);
  changecolor();
});

// sumButton.addEventListener("click", function() {
//   const numbers = getInput();
//   result.innerHTML = sum(numbers.a, numbers.b);
// });

subButton.addEventListener("click", function() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  result.innerHTML = sub(firstInt, secondInt);
  document.querySelector("#result").style.color = "green";
});

multiButton.addEventListener("click", function() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  result.innerHTML = multi(firstInt, secondInt);
});

divButton.addEventListener("click", function() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  result.innerHTML = div(firstInt, secondInt);
});
