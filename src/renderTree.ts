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
  drawLines();
}


function drawElemenets(container: HTMLDivElement, node: TNode) {
  const value = document.createElement("div");
  value.classList.add("value");
  value.textContent = node.value.toString();
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
  const thickness = 2;
  const line = document.createElement("div");
  line.classList.add("line");

  const e1 = getOffset(start);
  const e2 = getOffset(end);
  const width = (start.clientWidth + end.clientWidth) / 2;

  const length = Math.sqrt(((e2.x - e1.x) * (e2.x - e1.x)) + ((e2.y - e1.y) * (e2.y - e1.y))) - width;
  // center
  const cx = ((e1.x + e2.x) / 2) - (length / 2);
  const cy = ((e1.y + e2.y) / 2) - (thickness / 2);
  // angle
  const angle = Math.atan2((e1.y - e2.y), (e1.x - e2.x)) * (180 / Math.PI);

  line.style.position = "absolute";
  line.style.left = cx + "px";
  line.style.top = cy + "px";
  line.style.width = length + "px";
  line.style.height = thickness + "px";
  line.style.rotate = angle + "deg";

  binaryTreeContainer.appendChild(line);
}

function getOffset(element: HTMLDivElement) {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  }
}

export default renderTree;
