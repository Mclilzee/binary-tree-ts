import TNode from "./TNode";
class BinaryTree {
  readonly root: TNode;

  constructor(numbers: number[]) {
    this.root = this.buildTree(numbers);
  }

  private buildTree(numbers: number[]): TNode {
    if (numbers.length === 0) {
      return new TNode(0);
    }

    const root = new TNode(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
      const next = new TNode(numbers[i]);
      this.insert(root, next);
    }

    return root;
  }

  add(number: number) {
    const node = new TNode(number);
    this.insert(this.root, node);
  }

  private insert(root: TNode, node: TNode) {
    if (root.value === node.value) {
      return;
    }

    if (node.value < root.value) {
      if (root.left !== null) {
        this.insert(root.left, node);
      } else {
        root.left = node;
      }
    } else {
      if (root.right !== null) {
        this.insert(root.right, node)
      } else {
        root.right = node;
      }
    }
  }

}


export default BinaryTree;
