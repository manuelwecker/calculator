export function createDivWithContent(content) {
  // use https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  // use https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML for content
  const divElement = document.createElement("div");
  divElement.innerHTML = content;
  return divElement;
}

// export function createDivWithContent(content) {
//   let newDivWithContent = document.createElement("div");
//   let newContent = document.createTextNode(content);
//   newDivWithContent.appendChild(newContent);
//   let currentDiv = document.querySelector("#log");
//   document.body.insertBefore(newDivWithContent, currentDiv);
// }

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}
