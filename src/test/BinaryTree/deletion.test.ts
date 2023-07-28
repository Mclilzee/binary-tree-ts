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
});
