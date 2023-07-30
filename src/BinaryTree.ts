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

  find(value: number): TNode | null {
    if (this.root === null || this.root.value === value) {
      return this.root;
    }

    if (this.root.right !== null && value > this.root.value) {
      return this.searchForNode(this.root.right, value);
    } else if (this.root.left !== null) {
      return this.searchForNode(this.root.left, value);
    }

    return null;
  }

  private searchForNode(node: TNode, value: number): TNode | null {
    if (node.value === value) {
      return node;
    } else if (value > node.value && node.right !== null) {
      return this.searchForNode(node.right, value);
    } else if (value < node.value && node.left !== null) {
      return this.searchForNode(node.left, value);
    }

    return null;
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

  remove(value: number): BinaryTree {
    if (this.root === null) {
      return this;
    }

    if (this.root.value === value) {
      if (this.root.right === null) {
        this.root = this.root.left;
      } else if (this.root.left !== null) {
        const leftNode = this.root.left;
        this.root = this.root.right;
        this.insert(this.root, leftNode);
      } else {
        this.root = this.root.right;
      }
    } else if (value > this.root.value && this.root.right !== null) {
      this.deleteRightChild(this.root, this.root.right, value);
    } else if (this.root.left !== null) {
      this.deleteLeftChild(this.root, this.root.left, value);
    }

    return this;
  }

  private deleteRightChild(parent: TNode, node: TNode, value: number) {
    if (node.value === value) {
      if (node.right !== null && node.left !== null) {
        parent.right = node.right;
        this.insert(node.right, node.left);
      } else if (node.right === null && node.left !== null) {
        parent.right = node.left;
      } else {
        parent.right = node.right;
      }
    } else if (value > node.value && node.right !== null) {
      this.deleteRightChild(node, node.right, value);
    } else if (node.left !== null) {
      this.deleteLeftChild(node, node.left, value);
    }
  }

  private deleteLeftChild(parent: TNode, node: TNode, value: number) {
    if (node.value === value) {
      if (node.right !== null && node.left !== null) {
        parent.left = node.right;
        this.insert(parent.left, node.left);
      } else if (node.right === null && node.left !== null) {
        parent.left = node.left;
      } else {
        parent.left = node.right;
      }
    } else if (value < node.value && node.left !== null) {
      this.deleteLeftChild(node, node.left, value);
    } else if (node.right !== null) {
      this.deleteRightChild(node, node.right, value);
    }
  }
}

export default BinaryTree;
