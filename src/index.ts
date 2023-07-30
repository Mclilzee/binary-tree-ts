import BinaryTree from "./BinaryTree";
import "./style.css";
import prettyPrint from "./treePrinter";

// const numbers = createRandomNumbers(10);
const tree = new BinaryTree();
tree.buildNewTree([5, 20, 10, 30, 56, 22, 0, -1, -63]);

function createRandomNumbers(amount: number): number[] {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  return numbers;
}

prettyPrint(tree.root);
