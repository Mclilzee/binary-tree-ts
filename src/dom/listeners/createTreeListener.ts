import { createTreeForm } from "../domElements";
import tree from "../../tree";
import renderTree from "../rendering/renderTree";

function createTreeListener() {
  createTreeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const textArray = form.querySelector("input[name=text-array]") as HTMLInputElement;
    const values = textArray.value.split(" ")
      .map(value => parseInt(value))
      .filter(value => value >= 0 && value <= 99);

    tree.buildNewTree(values);
    renderTree(tree);
  })
}

export default createTreeListener;
