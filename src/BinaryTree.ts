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
    return this.searchForNode(this.root, value);
  }

  private searchForNode(root: TNode | null, value: number): TNode | null {
    if (root === null || root.value === value) {
      return root;
    }

    if (value > root.value && root.right !== null) {
      return this.searchForNode(root.right, value);
    } else if (value < root.value && root.left !== null) {
      return this.searchForNode(root.left, value);
    }

    return null;
  }

  toLevelOrderArray(): TNode[] {
    let array: TNode[] = [];
    const extract: TNode[] = [];
    if (this.root !== null) {
      array.push(this.root);
    }

    while (array.length > 0) {
      const node = array[0];
      array = array.splice(1);

      extract.push(node);

      if (node.left !== null) {
        array.push(node.left);
      }
      if (node.right !== null) {
        array.push(node.right);
      }
    }

    return extract;
  }

  getDepth(node?: TNode | null): number {
    if (node === undefined) {
      node = this.root;
    }

    if (node === null) {
      return 0;
    }
    const leftDepth = node.left !== null ? 1 + this.getDepth(node.left) : 0;
    const rightDepth = node.right !== null ? 1 + this.getDepth(node.right) : 0;

    return Math.max(leftDepth, rightDepth);
  }

  isBalanced() {
    if (this.root === null) {
      return true;
    }

    return this.getDepth(this.root.left) - this.getDepth(this.root.right) <= 1;
  }
}

export default BinaryTree;
