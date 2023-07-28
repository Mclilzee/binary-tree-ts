import TNode from "./TNode";
class BinaryTree {
  readonly root: TNode;

  constructor(numbers: number[]) {
    this.root = this.buildTree(numbers);
  }

  buildTree(numbers: number[]): TNode {
    if (numbers.length === 0) {
      return new TNode(0);
    }

    const root = new TNode(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
      const next = new TNode(numbers[i]);
      this.traverseTree(root, next);
    }

    return root;
  }

  insert(next: TNode) {
    this.traverseTree(this.root, next);
  }

  traverseTree(root: TNode, next: TNode) {
    if (root.value === next.value) {
      return;
    }

    if (next.value < root.value) {
      if (root.left !== null) {
        this.traverseTree(root.left, next);
      } else {
        root.left = next;
      }
    } else {
      if (root.right !== null) {
        this.traverseTree(root.right, next)
      } else {
        root.right = next;
      }
    }
  }

}


export default BinaryTree;
