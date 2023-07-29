import { describe, expect, test } from '@jest/globals';
import BinaryTree from '../../BinaryTree';

describe("Deletes correct elements", () => {
  test("Delete throws no error if root is null", () => {
    const tree = new BinaryTree();
    tree.remove(5);
    expect(tree.root).toBeNull();
  })

  test("Delete root if exist", () => {
    const tree = new BinaryTree(10);
    tree.remove(10);
    expect(tree.root).toBeNull()
  })

  test("Only deletes when value is found", () => {
    const tree = new BinaryTree(10);
    tree.remove(5);
    expect(tree.root!.value).toBe(10);

    tree.remove(10);
    expect(tree.root).toBeNull();
  })

  test("Delete root's right link", () => {
    const tree = new BinaryTree(5);
    tree.add(10);
    tree.remove(10);
    expect(tree.root!.right).toBeNull();
  })

  test("Delete root's left link", () => {
    const tree = new BinaryTree(10);
    tree.add(2);
    tree.remove(2);
    expect(tree.root!.left).toBeNull();
  })

  test("Delete both left and right links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 2, 10]);
    tree.remove(2).remove(10);
    expect(tree.root!.left).toBeNull();
    expect(tree.root!.right).toBeNull();
  })

  test("Delete nested right links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 7, 10, 13]);
    tree.remove(13);
    expect(tree.root!.value).toBe(5);
    expect(tree.root!.right!.value).toBe(7);
    expect(tree.root!.right!.right!.value).toBe(10);
    expect(tree.root!.right!.right!.right).toBeNull();
  })

  test("Delete nested left links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 5, 2]);
    tree.remove(2);
    expect(tree.root!.value).toBe(20);
    expect(tree.root!.left!.value).toBe(10);
    expect(tree.root!.left!.left!.value).toBe(5);
    expect(tree.root!.left!.left!.left).toBeNull();
  })

  test("Delete nested links branches in different directions", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 20, 5, 15, 16, 7, 8]);
    tree.remove(16).remove(8);

    expect(tree.root!.right!.value).toBe(20);
    expect(tree.root!.right!.left!.value).toBe(15);
    expect(tree.root!.right!.left!.right!).toBeNull();

    expect(tree.root!.left!.value).toBe(5);
    expect(tree.root!.left!.right!.value).toBe(7);
    expect(tree.root!.left!.right!.right).toBeNull();
  })
});
