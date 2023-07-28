import BinaryTree from "./BinaryTree";
import "./style.css";
import TNode from "./TNode";

const numbers = createRandomNumbers(10);
const tree = new BinaryTree();
tree.buildNewTree(numbers);

function createRandomNumbers(amount: number): number[] {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  return numbers;
}

function prettyPrint(node: TNode | null, prefix: string = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);

