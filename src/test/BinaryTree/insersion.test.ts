import { expect, test, describe } from "@jest/globals";
import BinaryTree from "../../BinaryTree";
import TNode from "../../TNode";

describe("Add nodes to the correct position", () => {
  test("Add to the right correctly", () => {
    const tree = new BinaryTree(2);
    tree.add(6);
    expect(tree.root.right.value).toBe(6);
  });

  test("Add to the left correctly", () => {
    const tree = new BinaryTree(10);
    tree.add(2);
    expect(tree.root.left.value).toBe(2);
  });

  test("Add both to left and right", () => {
    const tree = new BinaryTree(5);
    tree.add(2);
    tree.add(7);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(7);
  })

  test("Adding works by passing TNode", () => {
    const tree = new BinaryTree(5);
    tree.add(new TNode(2));
    tree.add(new TNode(7));
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(7);
  })

  test("Skips adding duplicates", () => {
    const tree = new BinaryTree(5);
    tree.add(5);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  });

  test("Add values to linked right nodes", () => {
    const tree = new BinaryTree(7);
    tree.add(10).add(15).add(8);
    expect(tree.root.right.right.value).toBe(15);
    expect(tree.root.right.left.value).toBe(8);
  });

  test("Add values to linked left nodes", () => {
    const tree = new BinaryTree(20);
    tree.add(2).add(4).add(-5);
    expect(tree.root.left.right.value).toBe(4);
    expect(tree.root.left.left.value).toBe(-5);
  });

  test("Add values to complext tree", () => {
    const tree = new BinaryTree(10);
    tree.add(4).add(32).add(1).add(67).add(-2).add(1).add(9).add(68).add(8);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(4);
    expect(tree.root.right.value).toBe(32);
    expect(tree.root.left.left.value).toBe(1);
    expect(tree.root.left.left.left.value).toBe(-2);
    expect(tree.root.left.right.value).toBe(9);
    expect(tree.root.left.right.left.value).toBe(8);
    expect(tree.root.right.right.value).toBe(67);
    expect(tree.root.right.right.right.value).toBe(68);
    expect(tree.root.left.right.left.value).toBe(8);
  });
});
