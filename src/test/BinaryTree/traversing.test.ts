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

describe("Tree to array return correct levelOrder array", () => {
  const tree = new BinaryTree();

  test("Return empty array if tree is empty", () => {
    const array = tree.toLevelOrderArray();
    expect(array.length).toBe(0);
  })

  test("Return root array", () => {
    tree.buildNewTree([6]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(1);
    expect(array[0]).toBe(tree.root.value);
  })

  test("Return correct array including root right link", () => {
    tree.buildNewTree([0, 5]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(0);
    expect(array[1]).toBe(5);
  })

  test("Return coect aay including root left link", () => {
    tree.buildNewTree([10, 5])
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(10);
    expect(array[1]).toBe(5);
  })

  test("Return array containting both left and right link", () => {
    tree.buildNewTree([10, 5, 20])
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(3);
    expect(array[0]).toBe(10);
    expect(array[1]).toBe(5);
    expect(array[2]).toBe(20);
  })

  test("Return correct level links, in complex tree", () => {
    tree.buildNewTree([10, 5, 20, 15, 30, 8, 0, 22, -5]);
    const array = tree.toLevelOrderArray();

    expect(array.length).toBe(9);
    expect(array[0]).toBe(10);
    expect(array[1]).toBe(5);
    expect(array[2]).toBe(20);
    expect(array[3]).toBe(0);
    expect(array[4]).toBe(8);
    expect(array[5]).toBe(15);
    expect(array[6]).toBe(30);
    expect(array[7]).toBe(-5);
    expect(array[8]).toBe(22);
  })

  test("Returns correct array if node is passed", () => {
    tree.buildNewTree([10, 5, 20, 15, 30, 8, 0, 22, 6]);
    const node = tree.root.right;
    const array = tree.toLevelOrderArray(node);

    expect(array.length).toBe(4);
    expect(array[0]).toBe(20);
    expect(array[1]).toBe(15);
    expect(array[2]).toBe(30);
    expect(array[3]).toBe(22);
  })
});

describe("Find correct depth of each node", () => {
  test("Root depth is 0 if doesn't contain links", () => {
    const tree = new BinaryTree(5);
    expect(tree.getDepth()).toBe(0);
  })

  test("Depth is 0 if root is null", () => {
    const tree = new BinaryTree();
    expect(tree.getDepth()).toBe(0);
  })

  test("Depth is 1 if right link is extended", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([5, 10]);
    expect(tree.getDepth()).toBe(1);
  })

  test("Depth is 1 if left link is extended", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 5]);
    expect(tree.getDepth()).toBe(1);
  })

  test("Depth depends on deepest link on right side if exists", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 5, 20, 30]);
    expect(tree.getDepth()).toBe(2);
  })

  test("Depth depends on deepeste link on left side if exists", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 5, 20, 4]);
    expect(tree.getDepth()).toBe(2);
  })

  test("Depth is correct for complex tree", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 30, 1, 2, 5, 15, 62, -6, 10, 14, 16, 60])
    expect(tree.getDepth()).toBe(6);
  })
})

describe("Tree are equal if they have same nodes values", () => {

  test("Trees are equal if they are the same instance", () => {

    const tree = new BinaryTree();
    const other = tree;

    expect(tree.equals(other)).toBe(true);
  })

  test("Trees are equal if their roots are null", () => {
    const tree = new BinaryTree();
    const other = new BinaryTree();

    expect(tree.equals(other)).toBe(true);
  })

  test("Trees are equal with equal values", () => {
    const tree = new BinaryTree();
    const other = new BinaryTree();

    tree.buildNewTree([0]);
    other.buildNewTree([0]);
    expect(tree.equals(other)).toBe(true);

    tree.buildNewTree([0, 2, 3]);
    other.buildNewTree([0, 2, 3, 2]);
    expect(tree.equals(other)).toBe(true);

    tree.buildNewTree([0, 5, 10, 23, 99, 80, 20, 15, -5, 200]);
    other.buildNewTree([0, 5, 10, 23, 99, 80, 20, 15, -5, 200]);
    expect(tree.equals(other)).toBe(true);
  })

  test("Trees are not equal if values not the same", () => {
    const tree = new BinaryTree();
    const other = new BinaryTree();

    tree.buildNewTree([0]);
    other.buildNewTree([1]);
    expect(tree.equals(other)).toBe(false);

    tree.buildNewTree([0, 2, 3]);
    other.buildNewTree([0, 2, 3, 5]);
    expect(tree.equals(other)).toBe(false);

    tree.buildNewTree([0, 5, 10, 23, 99, 80, 20, 15, -5, 200]);
    other.buildNewTree([0, 5, 10, 23, 99, 80, 20, 15, -5, 200, 22]);
    expect(tree.equals(other)).toBe(false);
  })
})
