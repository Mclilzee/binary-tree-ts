import { binaryTreeContainer } from "../domElements";

function selectValueListener() {
  binaryTreeContainer.addEventListener("click", (e) => {
    clearOutSelected();
    const element = e.target as HTMLDivElement;
    if (element === null || !element.classList.contains("value")) {
      return;
    }
    const value = element.dataset["value"];

    if (value === undefined) {
      return;
    }

    markLinesAsSelected(value);
    element.classList.add("selected");
  })
}

function clearOutSelected() {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(element => element.classList.remove("selected"));
}

function markLinesAsSelected(value: string) {
  const lines = document.querySelectorAll(`.linked-to-${value}`);
  lines.forEach(element => {
    const elementDiv = element as HTMLDivElement;
    elementDiv.classList.add("selected");
  })
}

export default selectValueListener;
