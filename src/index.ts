import "./style.css";
import buildTree from "./tree-builder";
import TNode from "./TNode";
import BinaryTree from "./tree-builder";

const numbers = createRandomNumbers(100);
const tree = new BinaryTree(numbers);

function createRandomNumbers(amount: number): number[] {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  return numbers;
}

function prettyPrint(node: TNode, prefix: string = "", isLeft = true) {
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

