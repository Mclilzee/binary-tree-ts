import { describe, expect, test } from "@jest/globals";
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
