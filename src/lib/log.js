export function insertLog(content) {
  let newElement = document.createElement("div");
  newElement.className = "equals";
  newElement.id = "log";
  newElement.innerHTML = content;
  document.body
    .querySelector(".log")
    .insertBefore(newElement, document.body.querySelector(".log").firstChild);
}
