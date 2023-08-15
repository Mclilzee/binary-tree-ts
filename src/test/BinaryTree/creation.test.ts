import { expect, beforeEach, describe, test } from "@jest/globals";
import BinaryTree from "../../BinaryTree";

describe("Inetialize correctly", () => {
  test("If no number provided, there is no root", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  })

  test("Tree intalize with correct root value", () => {
    let tree = new BinaryTree(0);
    expect(tree.root.value).toBe(0);

    tree = new BinaryTree(2);
    expect(tree.root.value).toBe(2);
  })
})

describe("Builds the tree correctly on initalization", () => {
  let tree: BinaryTree;
  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("Tree root is overwriten with new values", () => {
    tree.add(20).add(100).add(-5);

    const numbers = [1];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(1);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test("Overwrite old tree with new tree", () => {
    tree.buildNewTree([5, 2, 1, 50, 7, 3, 2, 12,]);
    const root = tree.root;

    tree.buildNewTree([10, 20, 5]);
    expect(tree.root).not.toBe(root);
    expect(tree.root.value).toBe(10);
    expect(tree.root.right.value).toBe(20);
    expect(tree.root.left.value).toBe(5);
  })

  test("New tree created with no root if empty array passed", () => {
    tree = new BinaryTree(5);
    tree.add(6).add(4);
    expect(tree.root.value).toBe(5);
    expect(tree.root.right.value).toBe(6);
    expect(tree.root.left.value).toBe(4);

    tree.buildNewTree([]);
    expect(tree.root).toBeNull();
  })

  test("Return correct right link when more values given", () => {
    const numbers = [3, 5];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(3);
    expect(tree.root.right).not.toBeNull();
    expect(tree.root.right.value).toBe(5);
  });

  test("Return correct left link when less value given", () => {
    const numbers = [8, 4];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(8);
    expect(tree.root.left).not.toBeNull();
    expect(tree.root.left.value).toBe(4);
  });

  test("Return correct left and right links", () => {
    const numbers = [6, 2, 9];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(6);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(9);
  });

  test("Work with more values", () => {
    const numbers = [8, 10, 2, 1];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(8);
    expect(tree.root.right.value).toBe(10);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.left.left.value).toBe(1);
  });

  test("Skips duplicate values", () => {
    const numbers = [8, 8, 8, 10, 2, 1];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(8);
    expect(tree.root.right.value).toBe(10);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.left.left.value).toBe(1);
  });

  test("Work with complicated array", () => {
    const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
    tree.buildNewTree(numbers);
    expect(tree.root.value).toBe(15);
    expect(tree.root.right.value).toBe(20);
    expect(tree.root.right.right.value).toBe(33);
    expect(tree.root.right.right.left).toBeNull();
    expect(tree.root.right.right.right.value).toBe(66);
    expect(tree.root.right.right.right.right).toBeNull();
    expect(tree.root.right.right.right.left).toBeNull();
    expect(tree.root.right.left.value).toBe(17);
    expect(tree.root.right.left.right).toBeNull();
    expect(tree.root.right.left.left).toBeNull();
    expect(tree.root.left.value).toBe(1);
    expect(tree.root.left.left.value).toBe(0);
    expect(tree.root.left.left.right).toBeNull();
    expect(tree.root.left.left.left.value).toBe(-5);
    expect(tree.root.left.left.left.right).toBeNull();
    expect(tree.root.left.left.left.left).toBeNull();
    expect(tree.root.left.right.value).toBe(3);
    expect(tree.root.left.right.left).toBeNull();
    expect(tree.root.left.right.right.value).toBe(5);
    expect(tree.root.left.right.right.right).toBeNull();
    expect(tree.root.left.right.right.left).toBeNull();
  });
});;

describe("Cloning tree", () => {
  test("Cloning returns new tree instance", () => {
    const tree = new BinaryTree();
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
  })

  test("Cloning tree with null root return clone tree with null root", () => {
    const tree = new BinaryTree();
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root).toBe(null);
  })

  test("Returns same root value", () => {
    const tree = new BinaryTree(5);
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root.value).toBe(5);
    expect(clone.root).not.toBe(tree.root);
  })

  test("Returns same values for left links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10])
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root.value).toBe(20);
    expect(clone.root).not.toBe(tree.root);
    expect(clone.root.left.value).toBe(10);
    expect(clone.root.left).not.toBe(tree.root.left);
  })

  test("Return same values for right links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([2, 10])
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root.value).toBe(2);
    expect(clone.root).not.toBe(tree.root);
    expect(clone.root.right.value).toBe(10);
    expect(clone.root.right).not.toBe(tree.root.right);
  })

  test("Return both left and right clonse", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 30, 5])
    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root.value).toBe(20);
    expect(clone.root).not.toBe(tree.root);
    expect(clone.root.right.value).toBe(30);
    expect(clone.root.right).not.toBe(tree.root.right);
    expect(clone.root.left.value).toBe(5);
    expect(clone.root.left).not.toBe(tree.root.left);
  })

  test("Returns equal complex tree", () => {
    const tree = new BinaryTree();
    const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
    tree.buildNewTree(numbers);

    const clone = tree.clone();

    expect(tree).not.toBe(clone);
    expect(clone.root.value).toBe(15);
    expect(clone.root).not.toBe(tree.root);
    expect(clone.root.right.value).toBe(20);
    expect(clone.root.right).not.toBe(tree.root.right);
    expect(clone.root.right.right.value).toBe(33);
    expect(clone.root.right.right).not.toBe(tree.root.right.right);
    expect(clone.root.right.right.left).toBeNull();
    expect(clone.root.right.right.right.value).toBe(66);
    expect(clone.root.right.right.right).not.toBe(tree.root.right.right.right);
    expect(clone.root.right.right.right.right).toBeNull();
    expect(clone.root.right.right.right.left).toBeNull();
    expect(clone.root.right.left.value).toBe(17);
    expect(clone.root.right.left).not.toBe(tree.root.right.left);
    expect(clone.root.right.left.right).toBeNull();
    expect(clone.root.right.left.left).toBeNull();
    expect(clone.root.left.value).toBe(1);
    expect(clone.root.left).not.toBe(tree.root.left);
    expect(clone.root.left.left.value).toBe(0);
    expect(clone.root.left.left).not.toBe(tree.root.left.left);
    expect(clone.root.left.left.right).toBeNull();
    expect(clone.root.left.left.left.value).toBe(-5);
    expect(clone.root.left.left.left).not.toBe(tree.root.left.left.left);
    expect(clone.root.left.left.left.right).toBeNull();
    expect(clone.root.left.left.left.left).toBeNull();
    expect(clone.root.left.right.value).toBe(3);
    expect(clone.root.left.right).not.toBe(tree.root.left.right);
    expect(clone.root.left.right.left).toBeNull();
    expect(clone.root.left.right.right.value).toBe(5);
    expect(clone.root.left.right.right).not.toBe(tree.root.left.right.right);
    expect(clone.root.left.right.right.right).toBeNull();
    expect(clone.root.left.right.right.left).toBeNull();
  })

  test("Able to clone nodes", () => {
    const tree = new BinaryTree();
    const numbers = [10, 5, 20, 15, 30, 8, 0, 22, 6];
    tree.buildNewTree(numbers);
    const node = tree.root.right;

    const clone = tree.clone(node);

    expect(clone.root.value).toBe(20);
    expect(clone.root).not.toBe(node);
    expect(clone.root.left.value).toBe(15);
    expect(clone.root.left).not.toBe(node.left);
    expect(clone.root.right.value).toBe(30);
    expect(clone.root.right).not.toBe(node.right);
    expect(clone.root.right.left.value).toBe(22);
    expect(clone.root.right.left).not.toBe(node.right.left);
  })
})
