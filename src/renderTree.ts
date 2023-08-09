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
    let nextSibling = value.nextElementSibling;

    if (nextSibling !== null) {
      const siblingValue = nextSibling.firstElementChild as HTMLDivElement;
      drawLine(value as HTMLDivElement, siblingValue);
      nextSibling = nextSibling.nextElementSibling;
    }

    if (nextSibling !== null) {
      const siblingValue = nextSibling.firstElementChild as HTMLDivElement;
      drawLine(value as HTMLDivElement, siblingValue);
      nextSibling = nextSibling.nextElementSibling;
    }
  });
}

function drawLine(start: HTMLDivElement, end: HTMLDivElement) {
  const thickness = 2;
  const line = document.createElement("div");
  line.classList.add("line");

  const e1 = getOffset(start);
  const e2 = getOffset(end);
  const length = Math.sqrt(((e2.x - e1.x) * (e2.x - e1.x)) + ((e2.y - e1.y) * (e2.y - e1.y)));

  const cx = ((e1.x + e2.x) / 2) - (length / 2);
  const cy = ((e1.y + e2.y) / 2) - (thickness / 2);
  // angle
  const angle = Math.atan2((e1.y - e2.y), (e1.x - e2.x)) * (180 / Math.PI);
  // make hr

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
    x: rect.left + rect.width,
    y: rect.top + rect.height
  }
}
export default renderTree;
