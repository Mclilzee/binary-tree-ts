import { describe, expect, test, beforeEach } from '@jest/globals';
import BinaryTree from '../BinaryTree';

describe("Builds the tree correctly on initalization", () => {
  test("Return no error when empty array passed", () => {
    const numbers: number[] = [];
    const root = new BinaryTree(numbers).root;
    expect(root).not.toBeNull();
    expect(root.value).toBe(0);
    expect(root.left).toBeNull();
    expect(root.right).toBeNull();

  })

  test("Return correct root", () => {
    const numbers = [1];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(1);
  })


  test("Return correct right link when more values given", () => {
    const numbers = [3, 5];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(3);
    expect(root.right).not.toBeNull();
    expect(root.right!.value).toBe(5);
  })

  test("Return correct left link when less value given", () => {
    const numbers = [8, 4];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(8);
    expect(root.left).not.toBeNull();
    expect(root.left!.value).toBe(4);
  })

  test("Return correct left and right links", () => {
    const numbers = [6, 2, 9];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(6);
    expect(root.left!.value).toBe(2);
    expect(root.right!.value).toBe(9);
  })

  test("Work with more values", () => {
    const numbers = [8, 10, 2, 1];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(8);
    expect(root.right!.value).toBe(10);
    expect(root.left!.value).toBe(2);
    expect(root.left!.left!.value).toBe(1);
  })

  test("Skips duplicate values", () => {
    const numbers = [8, 8, 8, 10, 2, 1];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(8);
    expect(root.right!.value).toBe(10);
    expect(root.left!.value).toBe(2);
    expect(root.left!.left!.value).toBe(1);
  })

  test("Work with complicated array", () => {
    const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
    const root = new BinaryTree(numbers).root;
    expect(root.value).toBe(15);
    expect(root.right!.value).toBe(20);
    expect(root.right!.right!.value).toBe(33);
    expect(root.right!.right!.left).toBeNull();
    expect(root.right!.right!.right!.value).toBe(66);
    expect(root.right!.right!.right!.right).toBeNull();
    expect(root.right!.right!.right!.left).toBeNull();
    expect(root.right!.left!.value).toBe(17);
    expect(root.right!.left!.right).toBeNull();
    expect(root.right!.left!.left).toBeNull();
    expect(root.left!.value).toBe(1);
    expect(root.left!.left!.value).toBe(0);
    expect(root.left!.left!.right).toBeNull();
    expect(root.left!.left!.left!.value).toBe(-5);
    expect(root.left!.left!.left!.right).toBeNull();
    expect(root.left!.left!.left!.left).toBeNull();
    expect(root.left!.right!.value).toBe(3);
    expect(root.left!.right!.left).toBeNull();
    expect(root.left!.right!.right!.value).toBe(5);
    expect(root.left!.right!.right!.right).toBeNull();
    expect(root.left!.right!.right!.left).toBeNull();
  })
})

describe("Add nodes to tree in the correct position", () => {
  let tree: BinaryTree;
  beforeEach(() => {
    tree = new BinaryTree([5]);
  })

  test("Add to the right correctly", () => {
    tree.add(6);
    expect(tree.root.right!.value).toBe(6);
  })

  test("Add to the left correctly", () => {
    tree.add(2);
    expect(tree.root.left!.value).toBe(2);
  })

  test("Skips adding duplicates", () => {
    tree.add(5);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  })

  test("Add values to linked right nodes", () => {
    tree.add(10);
    tree.add(15);
    tree.add(8);
    expect(tree.root!.right!.right!.value).toBe(15);
    expect(tree.root.right!.left!.value).toBe(8);
  })

  test("Add values to linked left nodes", () => {
    tree.add(2);
    tree.add(4);
    tree.add(-5);
    expect(tree.root.left!.right!.value).toBe(4);
    expect(tree.root.left!.left!.value).toBe(-5);
  })

  test("Add values to complext tree", () => {
    tree = new BinaryTree([10, 4, 32, 1, 67, -2, 1, 9]);
    tree.add(68);
    tree.add(8);
    expect(tree.root.right!.right!.right!.value).toBe(68);
    expect(tree.root.left!.right!.left!.value).toBe(8);
  })
})
