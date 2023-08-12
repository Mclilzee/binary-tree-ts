import { removeButton } from "../domElements";
import tree from "../../tree";
import renderTree from "../renderTree";

function removeValueListener() {
  removeButton.addEventListener("click", () => {
    const selected = document.querySelector(".value.selected") as HTMLDivElement;
    if (selected === null) {
      return;
    }

    const value = selected.dataset["value"];
    if (value === undefined) {
      return;
    }

    const number = parseInt(value);
    tree.remove(number);
    renderTree(tree);
  })
}

export default removeValueListener;
