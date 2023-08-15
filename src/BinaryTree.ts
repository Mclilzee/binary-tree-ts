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

  toLevelOrderArray(node: TNode | null = this.root): number[] {
    let array: TNode[] = [];
    const extract: number[] = [];

    if (node === null) {
      return [];
    }

    array.push(node);

    while (array.length > 0) {
      const node = array[0];
      array = array.splice(1);

      extract.push(node.value);

      if (node.left !== null) {
        array.push(node.left);
      }
      if (node.right !== null) {
        array.push(node.right);
      }
    }

    return extract;
  }

  getDepth(node: TNode | null = this.root): number {
    if (node === null) {
      return 0;
    }

    const leftDepth = node.left !== null ? 1 + this.getDepth(node.left) : 0;
    const rightDepth = node.right !== null ? 1 + this.getDepth(node.right) : 0;

    return Math.max(leftDepth, rightDepth);
  }

  isBalanced(node: TNode | null = this.root): boolean {
    if (node === null) {
      return true;
    }

    const leftDepth = node.left === null ? -1 : this.getDepth(node.left);
    const rightDepth = node.right === null ? -1 : this.getDepth(node.right);
    const heightDifference = Math.abs(leftDepth - rightDepth);

    if (heightDifference <= 1) {
      return this.isBalanced(node.left) && this.isBalanced(node.right)
    }

    return false;
  }

  balanceTree(): void {
    this.root = this.balanceNode(this.root);
  }

  balanceNode(node: TNode | null): TNode | null {
    if (node === null) {
      return null;
    }

    const leftDepth = this.getDepth(node.left);
    const rightDepth = this.getDepth(node.right);

    if (leftDepth > rightDepth) {
      return this.insert(node.left, new TNode(node.value));
    } else if (rightDepth > leftDepth) {
      node.right = node;
      return node.right;
    }

    return node;
  }

  clone(node: TNode | null = this.root): BinaryTree {
    const clone = new BinaryTree();
    if (node !== null) {
      const array = this.toLevelOrderArray(node);
      clone.buildNewTree(array);
    }

    return clone;
  }

  equals(other: BinaryTree) {
    if (Object.is(other, this)) {
      return true;
    }

    return this.nodesAreEqual(this.root, other.root);
  }

  private nodesAreEqual(first: TNode | null, second: TNode | null): boolean {
    if (first === null || second === null) {
      return first === second;
    }

    if (first.value !== second.value) {
      return false;
    }

    return this.nodesAreEqual(first.left, second.left) && this.nodesAreEqual(first.right, second.right);
  }
}
export default BinaryTree;
