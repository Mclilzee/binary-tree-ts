import BinaryTree from "./BinaryTree";
import { attachEventListeners } from "./eventHandling";
import renderTree from "./renderTree";
import "./style.css";


const tree = new BinaryTree();
const numbers = getRandomNumbers();
console.log(numbers);
tree.buildNewTree(numbers);

function getRandomNumbers(): number[] {
  const numbers: number[] = []
  for (let i = 0; i < 100; i++) {
    const number = Math.floor(Math.random() * 100);
    numbers.push(number);
  }

  return numbers;
}

renderTree(tree);
attachEventListeners();
