import BinaryTree from "./BinaryTree";

const tree = new BinaryTree();
tree.buildNewTree(getRandomNumbers());

function getRandomNumbers(): number[] {
  const numbers: number[] = [];

  for (let i = 0; i < 20; i++) {
    const number = Math.floor(Math.random() * 100);
    numbers.push(number);
  }

  return numbers;
}


export default tree;
