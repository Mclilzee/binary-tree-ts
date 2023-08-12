import { binaryTreeContainer } from "./domElements";

function attachBinaryTreeOnClickListener() {
  binaryTreeContainer.addEventListener("click", (e) => {
    const element = e.target as HTMLDivElement;
    if (element === null || !element.classList.contains("value")) {
      return;
    }
    const value = element.dataset["value"];

    if (value === undefined) {
      return;
    }

    clearOutSelected();
    markLinesAsSelected(value);
    element.classList.add("selected");
  })
}

function clearOutSelected() {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(element => element.classList.remove("selected"));
}

function markLinesAsSelected(value: string) {
  const lines = document.querySelectorAll(".line");
  lines.forEach(element => {
    const elementDiv = element as HTMLDivElement;
    if (elementDiv.dataset["linked-to"]?.includes(value)) {
      elementDiv.classList.add("selected");
    }
  })
}

export { attachBinaryTreeOnClickListener };
