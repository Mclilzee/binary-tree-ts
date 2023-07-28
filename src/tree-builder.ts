import TNode from "./TNode";

function buildTree(numbers: number[]): TNode {
  if (numbers.length === 0) {
    return new TNode(0);
  }

  const root = new TNode(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    const next = new TNode(numbers[i]);
    traverseNode(root, next);
  }

  console.log(root);
  return root;
}

function traverseNode(root: TNode, next: TNode) {
  if (root.value === next.value) {
    return;
  }

  if (next.value < root.value) {
    if (root.left !== null) {
      traverseNode(root.left, next);
    } else {
      root.left = next;
    }
  } else {
    if (root.right !== null) {
      traverseNode(root.right, next)
    } else {
      root.right = next;
    }
  }
}

export default buildTree;
