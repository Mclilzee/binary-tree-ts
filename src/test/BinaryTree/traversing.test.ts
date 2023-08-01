import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import TNode from "../../TNode";
import BinaryTree from "../../BinaryTree";

describe("Returns the correct Node object if exists", () => {
  test("Return null when no object found", () => {
    const tree = new BinaryTree();
    const node = tree.find(5);
    expect(node).toBeNull();
  })

  test("Returns correct root if root has same value", () => {
    const tree = new BinaryTree(5);
    const node = tree.find(5);
    expect(node.value).toBe(5);
    expect(tree.root).toBe(node);
  })

  test("Return correct node if it exist on the right side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([6, 10]);
    const node = tree.find(10);
    expect(node.value).toBe(10);
    expect(tree.root.right).toBe(node);
  })

  test("Return correct node if it exist on the left side", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 5]);
    const node = tree.find(5);
    expect(node.value).toBe(5);
    expect(tree.root.left).toBe(node);
  })

  test("Return correct nested right node", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 10, 15]);
    const node = tree.find(15);
    expect(node.value).toBe(15);
    expect(tree.root.right.right).toBe(node);
  })

  test("Return correct nested left node", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 0, -5]);
    const node = tree.find(-5);
    expect(node.value).toBe(-5);
    expect(tree.root.left.left).toBe(node);
  })

  test("Find a node in complex tree", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 20, 10, 30, 56, 22, 0, -1, -63]);
    const firstNode = tree.find(22);
    const secondNode = tree.find(-63);
    const thirdNode = tree.find(30);

    expect(firstNode.value).toBe(22);
    expect(tree.root.right.right.left).toBe(firstNode);

    expect(secondNode.value).toBe(-63);
    expect(tree.root.left.left.left).toBe(secondNode);

    expect(thirdNode.value).toBe(30);
    expect(tree.root.right.right).toBe(thirdNode);
    expect(thirdNode.left).toBe(firstNode);
  })
})

describe("Tree to array return correct levelOrder aray", () => {
  const tree = new BinaryTree();

  test("Return empty array if tree is empty", () => {
    const array = tree.toLevelOrderArray();
    expect(array.length).toBe(0);
  })

  test("Return root array", () => {
    tree.buildNewTree([6]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(1);
    expect(array[0]).toBe(tree.root);
  })

  test("Return correct array including root right link", () => {
    tree.buildNewTree([0, 5]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(tree.root);
    expect(array[1]).toBe(tree.root.right);
  })

  test("Return coect aay including root left link", () => {
    tree.buildNewTree([10, 5])
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(tree.root);
    expect(array[1]).toBe(tree.root.left);
  })

  test("Return array containting both left and right link", () => {
    tree.buildNewTree([10, 5, 20])
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(3);
    expect(array[0]).toBe(tree.root);
    expect(array[1]).toBe(tree.root.left);
    expect(array[2]).toBe(tree.root.right);
  })

  test("Return correct level links, in complex tree", () => {
    tree.buildNewTree([10, 5, 20, 15, 30, 8, 0, 22, -5]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(9);
    expect(array[0]).toBe(tree.root);
    expect(array[1]).toBe(tree.root.left);
    expect(array[2]).toBe(tree.root.right);
    expect(array[3]).toBe(tree.root.left.left);
    expect(array[4]).toBe(tree.root.left.right);
    expect(array[5]).toBe(tree.root.right.left);
    expect(array[6]).toBe(tree.root.right.right);
    expect(array[7]).toBe(tree.root.left.left.left);
    expect(array[8]).toBe(tree.root.right.right.left);
  })
});