import BinaryTree from "./BinaryTree";

const binaryTree = new BinaryTree();
const numbers = getRandomNumbers();
console.log(numbers);
binaryTree.buildNewTree(numbers);

function getRandomNumbers(): number[] {
  const numbers: number[] = []
  for (let i = 0; i < 100; i++) {
    const number = Math.floor(Math.random() * 100);
    numbers.push(number);
  }

  return numbers;
}

export default binaryTree;
