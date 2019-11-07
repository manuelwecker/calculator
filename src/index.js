"use strict";

import { sum, sub, multi, div, countDigits } from "./lib/operators";
import { createDivWithContent } from "./lib/elements";
import { insertLog } from "./lib/log";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multiButton = document.querySelector(".multi");
const divButton = document.querySelector(".div");
// const countLenghtButton = document.querySelector(".countLenght");

// function addOperationLog(operation) {
//   const firstInt = parseInt(firstInput.value);
//   const secondInt = parseInt(secondInput.value);
//   const result = document.querySelector("#result");
//   const ops = toString(operation);
//   const writeResult = ops(firstInt, secondInt);
//   result.innerHTML = writeResult;
//   const log = document.querySelector("#log");
//   createDivWithContent(writeResult);
//   insertLog(writeResult);
// }

function addOperationLog() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  const writeResult = sum(firstInt, secondInt);
  result.innerHTML = writeResult;
  const log = document.querySelector("#log");
  createDivWithContent(writeResult);
  insertLog(writeResult);
}

sumButton.addEventListener("click", addOperationLog);

subButton.addEventListener("click", function() {
  const firstInt = parseInt(firstInput.value);
  const secondInt = parseInt(secondInput.value);
  const result = document.querySelector("#result");
  result.innerHTML = sub(firstInt, secondInt);
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

// div multi sub

// countLenghtButton.addEventListener("click", function() {
//   const firstInt = parseInt(firstInput.value);
//   const length = document.querySelector("#length");
//   length.innerHTML = countDigits(firstInt);
// });

// function getInput() {
//   const firstInput = document.querySelector("[name=first]");
//   const secondInput = document.querySelector("[name=second]");
//   return {
//     first: a,
//     second: b
//   };
// }

// function insertNumberbyClick(insertNumber) {
//   let number = insertNumber;
//   if (firstInput != "") {
//     alert("leer");
//   }
// }

// const sevenButton = document.querySelector(".btn7");
// insertNumberbyClick.addEventListener("click", function() {
//   // let btnNumber = clickedNumber;
//   sevenButton.document.querySelector("[name=first]");
// });

// countLenghtButton.addEventListener("click", function() {
//   const firstInt = parseInt(firstInput.value);
//   const secondInt = parseInt(secondInput.value);
//   const result = document.querySelector("#result");
//   result.innerHTML = div(firstInt, secondInt);
//   const length = document.querySelector("#length");
//   length.innerHTML = countDigits(result);
// });
