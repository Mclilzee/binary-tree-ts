import { describe, expect, test, beforeEach } from '@jest/globals';
import BinaryTree from '../../BinaryTree';

describe("Deletes correct elements", () => {
  test("Delete throws no error if root is null", () => {
    const tree = new BinaryTree();
    tree.delete(5);
    expect(tree.root).toBeNull();
  })

  test("Delete root if exist", () => {
    const tree = new BinaryTree(10);
    tree.delete(10);
    expect(tree.root).toBeNull()
  })

  test("Only deletes when value is found", () => {
    const tree = new BinaryTree(10);
    tree.delete(5);
    expect(tree.root!.value).toBe(10);

    tree.delete(10);
    expect(tree.root).toBeNull();
  })
})
