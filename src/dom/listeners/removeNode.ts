import { removeButton } from "../domElements";

function removeNodeListener() {
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
  })
}
