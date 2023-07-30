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
    this.root = null;
    values.forEach(value => this.add(value));
  }

  add(value: number | TNode): BinaryTree {
    let node: TNode = typeof value === "number" ? new TNode(value) : value;
    this.root = this.insert(this.root, node);
    return this;
  }

  private insert(root: TNode | null, node: TNode): TNode {
    if (root === null) {
      return node;
    }

    if (node.value < root.value) {
      root.left = this.insert(root.left, node);
    } else if (node.value > root.value) {
      root.right = this.insert(root.right, node)
    }

    return root;
  }

  remove(value: number): BinaryTree {
    this.root = this.deleteChildNode(this.root, value);
    return this;
  }

  private deleteChildNode(root: TNode | null, value: number): TNode | null {
    if (root === null) {
      return null;
    }

    if (root.value === value) {
      if (root.right === null) {
        return root.left;
      } else if (root.left !== null) {
        this.insert(root.right, root.left);
        return root.right;
      } else {
        return root.right;
      }
    } else if (value > root.value) {
      root.right = this.deleteChildNode(root.right, value);
    } else if (root.left !== null) {
      root.left = this.deleteChildNode(root.left, value);
    }

    return root;
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
}

export default BinaryTree;
