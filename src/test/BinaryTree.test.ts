import { describe, expect, test, beforeEach } from '@jest/globals';
import BinaryTree from '../BinaryTree';
import TNode from '../TNode';

describe("Inetialize correctly", () => {
  test("If no number provided, root value is 0", () => {
    const tree = new BinaryTree();
    expect(tree.root.value).toBe(0);
  })

  test("Tree intalize with correct root value", () => {
    let tree = new BinaryTree(0);
    expect(tree.root.value).toBe(0);

    tree = new BinaryTree(2);
    expect(tree.root.value).toBe(2);
  })
})

describe("Add to the right correctly", () => {
  test("Add to the right correctly", () => {
    const tree = new BinaryTree(2);
    tree.insert(6);
    expect(tree.root!.right!.value).toBe(6);
  });

  test("Add to the left correctly", () => {
    const tree = new BinaryTree(10);
    tree.insert(2);
    expect(tree.root!.left!.value).toBe(2);
  });

  test("Add both to left and right", () => {
    const tree = new BinaryTree(5);
    tree.insert(2);
    tree.insert(7);
    expect(tree.root!.left!.value).toBe(2);
    expect(tree.root!.right!.value).toBe(7);
  })

  test("Adding works by passing TNode", () => {
    const tree = new BinaryTree(5);
    tree.insert(new TNode(2));
    tree.insert(new TNode(7));
    expect(tree.root!.left!.value).toBe(2);
    expect(tree.root!.right!.value).toBe(7);
  })

  test("Skips adding duplicates", () => {
    const tree = new BinaryTree(5);
    tree.insert(5);
    expect(tree.root!.right).toBeNull();
    expect(tree.root!.left).toBeNull();
  });

  test("Add values to linked right nodes", () => {
    const tree = new BinaryTree(7);
    tree.insert(10).insert(15).insert(8);
    expect(tree.root!.right!.right!.value).toBe(15);
    expect(tree.root!.right!.left!.value).toBe(8);
  });

  test("Add values to linked left nodes", () => {
    const tree = new BinaryTree(20);
    tree.insert(2).insert(4).insert(-5);
    expect(tree.root!.left!.right!.value).toBe(4);
    expect(tree.root!.left!.left!.value).toBe(-5);
  });

  test("Add values to complext tree", () => {
    const tree = new BinaryTree(10);
    tree.insert(4).insert(32).insert(1).insert(67).insert(-2).insert(1).insert(9).insert(68).insert(8);
    expect(tree.root!.value).toBe(10);
    expect(tree.root!.left!.value).toBe(4);
    expect(tree.root!.right!.value).toBe(32);
    expect(tree.root!.left!.left!.value).toBe(1);
    expect(tree.root!.left!.left!.left!.value).toBe(-2);
    expect(tree.root!.left!.right!.value).toBe(9);
    expect(tree.root!.left!.right!.left!.value).toBe(8);
    expect(tree.root!.right!.right!.value).toBe(67);
    expect(tree.root!.right!.right!.right!.value).toBe(68);
    expect(tree.root!.left!.right!.left!.value).toBe(8);
  });
});

describe("Builds the tree correctly on initalization", () => {
  let tree: BinaryTree;
  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("Tree root is overwriten with new values", () => {
    tree.insert(20).insert(100).insert(-5);

    const numbers = [1];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(1);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test("New tree created with root 0 if empty array passed", () => {
    tree = new BinaryTree(5);
    tree.insert(6).insert(4);
    expect(tree.root.value).toBe(5);
    expect(tree.root.right!.value).toBe(6);
    expect(tree.root.left!.value).toBe(4);

    tree.buildNewTree([]);
    expect(tree.root.value).toBe(0);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  })

  test("Return correct right link when more values given", () => {
    const numbers = [3, 5];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(3);
    expect(tree.root!.right).not.toBeNull();
    expect(tree.root!.right!.value).toBe(5);
  });

  test("Return correct left link when less value given", () => {
    const numbers = [8, 4];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(8);
    expect(tree.root!.left).not.toBeNull();
    expect(tree.root!.left!.value).toBe(4);
  });

  test("Return correct left and right links", () => {
    const numbers = [6, 2, 9];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(6);
    expect(tree.root!.left!.value).toBe(2);
    expect(tree.root!.right!.value).toBe(9);
  });

  test("Work with more values", () => {
    const numbers = [8, 10, 2, 1];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(8);
    expect(tree.root!.right!.value).toBe(10);
    expect(tree.root!.left!.value).toBe(2);
    expect(tree.root!.left!.left!.value).toBe(1);
  });

  test("Skips duplicate values", () => {
    const numbers = [8, 8, 8, 10, 2, 1];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(8);
    expect(tree.root!.right!.value).toBe(10);
    expect(tree.root!.left!.value).toBe(2);
    expect(tree.root!.left!.left!.value).toBe(1);
  });

  test("Work with complicated array", () => {
    const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
    tree.buildNewTree(numbers);
    expect(tree.root!.value).toBe(15);
    expect(tree.root!.right!.value).toBe(20);
    expect(tree.root!.right!.right!.value).toBe(33);
    expect(tree.root!.right!.right!.left).toBeNull();
    expect(tree.root!.right!.right!.right!.value).toBe(66);
    expect(tree.root!.right!.right!.right!.right).toBeNull();
    expect(tree.root!.right!.right!.right!.left).toBeNull();
    expect(tree.root!.right!.left!.value).toBe(17);
    expect(tree.root!.right!.left!.right).toBeNull();
    expect(tree.root!.right!.left!.left).toBeNull();
    expect(tree.root!.left!.value).toBe(1);
    expect(tree.root!.left!.left!.value).toBe(0);
    expect(tree.root!.left!.left!.right).toBeNull();
    expect(tree.root!.left!.left!.left!.value).toBe(-5);
    expect(tree.root!.left!.left!.left!.right).toBeNull();
    expect(tree.root!.left!.left!.left!.left).toBeNull();
    expect(tree.root!.left!.right!.value).toBe(3);
    expect(tree.root!.left!.right!.left).toBeNull();
    expect(tree.root!.left!.right!.right!.value).toBe(5);
    expect(tree.root!.left!.right!.right!.right).toBeNull();
    expect(tree.root!.left!.right!.right!.left).toBeNull();
  });
});;

