import { expect, beforeEach, describe, test } from "@jest/globals";
import BinaryTree from "../../BinaryTree";

describe("Inetialize correctly", () => {
  test("If no number provided, there is no root", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  })

  test("Tree intalize with correct root value", () => {
    let tree = new BinaryTree(0);
    expect(tree.root!.value).toBe(0);

    tree = new BinaryTree(2);
    expect(tree.root!.value).toBe(2);
  })
})

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
    expect(tree.root!.left).toBeNull();
    expect(tree.root!.right).toBeNull();
  });

  test("New tree created with no root if empty array passed", () => {
    tree = new BinaryTree(5);
    tree.insert(6).insert(4);
    expect(tree.root!.value).toBe(5);
    expect(tree.root!.right!.value).toBe(6);
    expect(tree.root!.left!.value).toBe(4);

    tree.buildNewTree([]);
    expect(tree.root!).toBeNull();
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
