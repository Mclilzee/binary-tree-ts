import TNode from "./TNode";
class BinaryTree {
  root: TNode | null;

  constructor(value?: number) {
    if (typeof value === "number") {
      this.root = new TNode(value);
    } else {
      this.root = null;
    }
  }

  buildNewTree(values: number[]) {
    if (values.length === 0) {
      this.root = null;
      return;
    }

    const root = new TNode(values[0]);
    for (let i = 1; i < values.length; i++) {
      const node = new TNode(values[i]);
      this.insert(root, node);
    }

    this.root = root;
  }

  add(value: number | TNode): BinaryTree {
    let node: TNode;

    if (typeof value == "number") {
      node = new TNode(value);
    } else {
      node = value;
    }

    if (this.root === null) {
      this.root = node;
    } else {
      this.insert(this.root, node);
    }
    return this;
  }

  private insert(root: TNode, node: TNode) {
    if (node.value < root.value) {
      if (root.left !== null) {
        this.insert(root.left, node);
      } else {
        root.left = node;
      }

    } else if (node.value > root!.value) {
      if (root.right !== null) {
        this.insert(root!.right, node)
      } else {
        root.right = node;
      }
    }
  }

  remove(value: number) {
    if (this.root === null) {
      return;
    }

    if (this.root.value === value) {
      this.root = null;
    } else if (value > this.root.value && this.root.right !== null) {
      this.deleteRightNode(this.root, this.root.right, value);
    } else if (value < this.root.value && this.root.left !== null) {
      this.deleteLeftNode(this.root, this.root.left, value);
    }
  }

  private deleteRightNode(parent: TNode, node: TNode, value: number) {
    if (node.value === value) {
      parent.right = node.right;
    } else if (value > node.value && node.right !== null) {
      this.deleteRightNode(node, node.right, value);
    }
  }

  private deleteLeftNode(parent: TNode, node: TNode, value: number) {
    if (node.value === value) {
      parent.left = node.right;
    } else if (value < node.value && node.left !== null) {
      this.deleteLeftNode(node, node.left, value);
    }
  }
}

export default BinaryTree;
