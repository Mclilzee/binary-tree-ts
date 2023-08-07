import BinaryTree from "./BinaryTree";
import renderTree from "./renderTree";
import "./style.css";


const tree = new BinaryTree();
const numbers = getRandomNumbers();
tree.buildNewTree(numbers);
console.log(numbers);

function getRandomNumbers(): number[] {
  const numbers: number[] = []
  for (let i = 0; i < 1000; i++) {
    const number = Math.floor(Math.random() * 20);
    if (numbers.includes(number)) {
      continue;
    }

    numbers.push(number);
  }

  return numbers;
}

renderTree(tree);
