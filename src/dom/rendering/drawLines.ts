import LineCord from "../../LineCord";
import { binaryTreeContainer } from "../domElements";

function drawLines(): void {
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

export default drawLines;
