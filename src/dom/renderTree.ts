import BinaryTree from "../BinaryTree";
import LineCord from "../LineCord";
import TNode from "../TNode";
import { binaryTreeContainer, balanceButton } from "./domElements";

function renderTree(tree: BinaryTree) {
  clearUpBinaryDom();
  if (tree.root === null) {
    return;
  }

  drawElemenets(binaryTreeContainer, tree.root);
  drawLines();
  displayStats(tree);
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

function drawLines() {
  const values = document.querySelectorAll(".value");
  values.forEach(value => {
    let sibling = value.nextElementSibling;
    while (sibling !== null) {
      const siblingValue = getValueElement(sibling as HTMLDivElement);
      sibling = sibling.nextElementSibling;

      if (siblingValue === null) {
        continue;
      }

      drawLine(value as HTMLDivElement, siblingValue as HTMLDivElement);
    }
  });
}

function getValueElement(container: HTMLDivElement): HTMLDivElement | null {
  let child = container.firstElementChild;

  while (child !== null) {
    if (child.classList.contains("value")) {
      return child as HTMLDivElement;
    }

    child = child.nextElementSibling;
  }

  return null;
}

function drawLine(start: HTMLDivElement, end: HTMLDivElement) {
  const lineCords = new LineCord(start, end, 2);
  const line = document.createElement("div");

  const startLinkClass = start.dataset["value"] ? `linked-to-${start.dataset["value"]}` : "";
  const endLinkClass = end.dataset["value"] ? `linked-to-${end.dataset["value"]}` : "";

  line.classList.add("line");
  line.classList.add(startLinkClass);
  line.classList.add(endLinkClass);
  line.style.left = lineCords.x + "px";
  line.style.top = lineCords.y + "px";
  line.style.width = lineCords.length + "px";
  line.style.height = lineCords.thickness + "px";
  line.style.rotate = lineCords.angle + "deg";

  binaryTreeContainer.appendChild(line);
}

function displayStats(tree: BinaryTree) {
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
