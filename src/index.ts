import "./style.css";
import buildTree from "./tree-builder";
import TNode from "./TNode";
import BinaryTree from "./tree-builder";

const numbers = [15, 3, 45, 56, 12, 12, 6, 34, 7, -2, 3, 0, 1, 54, 7, 2];
const tree = new BinaryTree(numbers);

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
