import tree from "../../tree";
import { addValueForm } from "../domElements";
import renderTree from "../renderTree";

function addValueListner() {
  addValueForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input[name=value]") as HTMLInputElement;
    const number = input.valueAsNumber;

    tree.add(number);
    renderTree(tree);
  })
}

export default addValueListner;
