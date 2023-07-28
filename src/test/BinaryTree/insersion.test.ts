import { expect, test, describe } from "@jest/globals";
import BinaryTree from "../../BinaryTree";
import TNode from "../../TNode";

describe("Add nodes to the correct position", () => {
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
