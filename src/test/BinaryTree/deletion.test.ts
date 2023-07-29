import { describe, expect, test } from '@jest/globals';
import BinaryTree from '../../BinaryTree';

describe("Delete correct nodes", () => {
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
    expect(tree.root.value).toBe(10);

    tree.remove(10);
    expect(tree.root).toBeNull();
  })

  test("Delete root's right link", () => {
    const tree = new BinaryTree(5);
    tree.add(10);
    tree.remove(10);
    expect(tree.root.right).toBeNull();
  })

  test("Delete root's left link", () => {
    const tree = new BinaryTree(10);
    tree.add(2);
    tree.remove(2);
    expect(tree.root.left).toBeNull();
  })

  test("Delete both left and right links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 2, 10]);
    tree.remove(2).remove(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  })

  test("Delete nested right links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 7, 10, 13]);
    tree.remove(13);
    expect(tree.root.value).toBe(5);
    expect(tree.root.right.value).toBe(7);
    expect(tree.root.right.right.value).toBe(10);
    expect(tree.root.right.right.right).toBeNull();
  })

  test("Delete nested left links", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 5, 2]);
    tree.remove(2);
    expect(tree.root.value).toBe(20);
    expect(tree.root.left.value).toBe(10);
    expect(tree.root.left.left.value).toBe(5);
    expect(tree.root.left.left.left).toBeNull();
  })

  test("Delete nested links branches in different directions", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 20, 5, 15, 16, 7, 8]);
    tree.remove(16).remove(8);

    expect(tree.root.right.value).toBe(20);
    expect(tree.root.right.left.value).toBe(15);
    expect(tree.root.right.left.right).toBeNull();

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.right.value).toBe(7);
    expect(tree.root.left.right.right).toBeNull();
  })

})

describe("Relink nodes correctly after deletion", () => {
  test("Relink root if it has right child", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 30]);
    tree.remove(20);

    expect(tree.root.value).toBe(30);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  })

  test("Relink root if it has left and no right child", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10]);
    tree.remove(20);

    expect(tree.root.value).toBe(10);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  })

  test("Relink root assign left to right node if both children exist", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 30, 25, 10, 15]);
    tree.remove(20);
    expect(tree.root.value).toBe(30);
    expect(tree.root.left.value).toBe(25);
    expect(tree.root.left.left.value).toBe(10);
    expect(tree.root.left.left.right.value).toBe(15);
  })

  test("Relink nested right link by default on the right side if exist", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 20, 30]);
    tree.remove(20);

    expect(tree.root.value).toBe(10);
    expect(tree.root.right.value).toBe(30);
    expect(tree.root.right.right).toBeNull();
    expect(tree.root.right.left).toBeNull();
  })

  test("Relink nested right link by default on the left side if exist", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 15]);
    tree.remove(10);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left.value).toBe(15);
    expect(tree.root.left.right).toBeNull();
    expect(tree.root.left.left).toBeNull();
  })

  test("Relink nested left link if right link doesn't exist on root's right side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 20, 15]);
    tree.remove(20);

    expect(tree.root.value).toBe(10);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.right).toBeNull();
    expect(tree.root.right.left).toBeNull();
  })

  test("Relink nested left link if right link doesn't exist on root's left side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 5]);
    tree.remove(10);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.right).toBeNull();
    expect(tree.root.left.left).toBeNull();
  })

  test("Relink nested link if node has both children starting from root's right side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 30, 60, 50, 25, 21, 26]);
    tree.remove(25);
    expect(tree.root.value).toBe(20);
    expect(tree.root.right.value).toBe(30);
    expect(tree.root.right.right.value).toBe(60);
    expect(tree.root.right.left.value).toBe(26);
    expect(tree.root.right.left.left.value).toBe(21);
  })

  test("Relink nested links if node has both children starting from root's left side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 18, 19, 17, 16, 8, 9, 5]);
    tree.remove(10);

    expect(tree.root.value).toBe(20);
    expect(tree.root.left.value).toBe(18);
    expect(tree.root.left.right.value).toBe(19);
    expect(tree.root.left.left.value).toBe(17);
    expect(tree.root.left.left.left.value).toBe(16);
    expect(tree.root.left.left.left.left.value).toBe(8);
    expect(tree.root.left.left.left.left.left.value).toBe(5);
    expect(tree.root.left.left.left.left.right.value).toBe(9);
    expect(tree.root.left.left.left.left.right.left).toBeNull();
    expect(tree.root.left.left.left.left.right.right).toBeNull();
  })

  test("Relink a complex tree after multiple removal", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([50, 70, 90, 100, 60, 65, 55, 80, 40, 45, 30, 15]);
    tree.remove(60);
    tree.remove(55);
    tree.remove(90);
    tree.remove(30);
    tree.remove(50);

    expect(tree.root.value).toBe(70);
    expect(tree.root.right.value).toBe(100);
    expect(tree.root.right.left.value).toBe(80);
    expect(tree.root.left.value).toBe(65);
    expect(tree.root.left.left.value).toBe(40);
    expect(tree.root.left.left.right.value).toBe(45);
    expect(tree.root.left.left.left.value).toBe(15);
  })
});
