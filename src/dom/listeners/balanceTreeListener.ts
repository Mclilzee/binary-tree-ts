import { balanceButton } from "../domElements";
import tree from "../../tree";
import renderTree from "../rendering/renderTree";

function balanceTreeListener() {
  balanceButton.addEventListener("click", () => {
    console.log("clicked");
    if (tree.isBalanced()) {
      return;
    }

    tree.balanceTree();
    renderTree(tree);
  })
}

export default balanceTreeListener;
