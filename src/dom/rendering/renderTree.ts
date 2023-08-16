import BinaryTree from "../../BinaryTree";
import TNode from "../../TNode";
import { binaryTreeContainer, balanceButton } from "../domElements";
import drawLines from "./drawLines";

function renderTree(tree: BinaryTree) {
  clearUpBinaryDom();
  if (tree.root === null) {
    return;
  }

  drawElemenets(binaryTreeContainer, tree.root);
  drawLines();
  styleBalanceButton(tree);
}

function clearUpBinaryDom() {
  while (binaryTreeContainer.firstChild !== null) {
    binaryTreeContainer.removeChild(binaryTreeContainer.firstChild);
  }
}

function drawElemenets(container: HTMLDivElement, node: TNode) {
  const value = document.createElement("div");
  value.classList.add("value");
  value.textContent = node.value.toString();
  value.dataset['value'] = node.value.toString();
  container.appendChild(value);

  if (node.left !== null) {
    const leftLink = document.createElement("div");
    leftLink.classList.add("left-link");
    drawElemenets(leftLink, node.left);
    container.appendChild(leftLink);
  }

  if (node.right !== null) {
    const rightLink = document.createElement("div");
    rightLink.classList.add("right-link");
    drawElemenets(rightLink, node.right);
    container.appendChild(rightLink);
  }
}


function styleBalanceButton(tree: BinaryTree) {
  const balanced = tree.isBalanced();
  if (balanced) {
    balanceButton.textContent = "Balanced! :)";
    balanceButton.classList.add("balanced");
    balanceButton.classList.remove("unbalanced");
  } else {
    balanceButton.textContent = "Tree unbalanced! Click to balance";
    balanceButton.classList.remove("balanced");
    balanceButton.classList.add("unbalanced");
  }
}

export default renderTree;
