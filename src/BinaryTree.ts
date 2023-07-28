import TNode from "./TNode";
class BinaryTree {
  root: TNode;

  constructor(number?: number) {
    if (number) {
      this.root = new TNode(number);
    } else {
      this.root = new TNode(0);
    }
  }

  buildNewTree(numbers: number[]) {
    if (numbers.length === 0) {
      this.root = new TNode(0);
      return;
    }

    const root = new TNode(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
      const node = new TNode(numbers[i]);
      this.traverse(root, node);
    }

    this.root = root;
  }

  insert(value: number | TNode): BinaryTree {
    let node: TNode;

    if (typeof value == "number") {
      node = new TNode(value);
    } else {
      node = value;
    }

    this.traverse(this.root, node);
    return this;
  }

  delete(number: number) {
  }

  private traverse(root: TNode, node: TNode) {
    if (node.value < root!.value) {
      if (root.left !== null) {
        this.traverse(root!.left, node);
      } else {
        root.left = node;
      }

    } else if (node.value > root!.value) {
      if (root.right !== null) {
        this.traverse(root!.right, node)
      } else {
        root.right = node;
      }
    }
  }
}

export default BinaryTree;
