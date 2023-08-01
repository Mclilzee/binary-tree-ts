import BinaryTree from "./BinaryTree";
import TNode from "./TNode";

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
  const nodeDiv = document.createElement("div");
  nodeDiv.classList.add("node");

  const value = document.createElement("div");
  value.textContent = node.value.toString();

  value.classList.add("value");
  nodeDiv.appendChild(value);

  if (node.left !== null) {
    const leftLink = document.createElement("div");
    leftLink.classList.add("left-link");
    drawElemenets(leftLink, node.left);
    nodeDiv.appendChild(leftLink);
  }

  if (node.right !== null) {
    const rightLink = document.createElement("div");
    rightLink.classList.add("right-link");
    drawElemenets(rightLink, node.right);
    nodeDiv.appendChild(rightLink);
  }

  container.appendChild(nodeDiv);
}

export default renderTree;