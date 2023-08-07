import BinaryTree from "./BinaryTree";
import TNode from "./TNode";
import { getNodeDepth } from "./binaryTreeUtils";

const binaryTreeContainer = document.querySelector(".binary-tree-container") as HTMLDivElement;

function renderTree(tree: BinaryTree) {
  const firstNode = document.querySelector(".binary-tree-container > .node");
  if (firstNode !== null) {
    binaryTreeContainer.removeChild(firstNode);
  }

  if (tree.root === null) {
    return;
  }

  drawElemenets(binaryTreeContainer, tree.root);
}


function drawElemenets(container: HTMLDivElement, node: TNode) {
  const depth = getNodeDepth(node);

  const nodeDiv = document.createElement("div");
  nodeDiv.classList.add("node");

  const value = document.createElement("div");
  value.classList.add("value");
  value.textContent = node.value.toString();

  nodeDiv.appendChild(value);

  if (node.left !== null) {
    const leftLink = document.createElement("div");
    leftLink.classList.add("left-link");
    leftLink.style.right = 200 * depth + "px";
    drawElemenets(leftLink, node.left);
    nodeDiv.appendChild(leftLink);
  }

  if (node.right !== null) {
    const rightLink = document.createElement("div");
    rightLink.classList.add("right-link");
    rightLink.style.left = 200 * depth + "px";
    drawElemenets(rightLink, node.right);
    nodeDiv.appendChild(rightLink);
  }

  container.appendChild(nodeDiv);
}

export default renderTree;
