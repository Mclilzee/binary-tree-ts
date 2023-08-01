import BinaryTree from "./BinaryTree";
import renderTree from "./renderTree";
import "./style.css";


const tree = new BinaryTree();
tree.buildNewTree(getRandomNumbers());

function getRandomNumbers(): number[] {
  const numbers: number[] = []
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  return numbers;
}

renderTree(tree);
