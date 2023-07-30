import { test, describe, expect, jest, beforeAll, beforeEach } from "@jest/globals";
import TNode from "../../TNode";
import { levelOrder } from "../../BinaryTreeUtilities";
import BinaryTree from "../../BinaryTree";

describe("Call function provided correctly for each node", () => {
  let array: TNode[] = [];
  let fn: (node: TNode) => void;

  beforeEach(() => {
    array = [];
    fn = jest.fn((node: TNode) => array.push(node));
  })

  test("Call function on root", () => {
    const root = new TNode(0);

    levelOrder(root, fn);

    expect(fn).toBeCalledTimes(1);
    expect(array[0]).toBe(root);
  })

  test("Call function on root and root's right link", () => {
    const root = new TNode(0);
    root.right = new TNode(5);

    levelOrder(root, fn);

    expect(fn).toBeCalledTimes(2);
    expect(array.length).toBe(2);
    expect(array).toContain(root);
    expect(array).toContain(root.right);
  })

  test("Call function on root and root's left link", () => {
    const root = new TNode(10);
    root.left = new TNode(5);

    levelOrder(root, fn);

    expect(fn).toBeCalledTimes(2);
    expect(array.length).toBe(2);
    expect(array).toContain(root);
    expect(array).toContain(root.left);
  })

  test("Call function on root, left link, and right link", () => {
    const root = new TNode(10);
    root.left = new TNode(5);
    root.right = new TNode(20);

    levelOrder(root, fn);

    expect(fn).toBeCalledTimes(3);
    expect(array.length).toBe(3);
    expect(array).toContain(root);
    expect(array).toContain(root.left);
    expect(array).toContain(root.right);
  })

  test("Call function on nested links aswell", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([10, 5, 20, 15, 30, 8, 0]);

    levelOrder(tree.root, fn);

    expect(fn).toBeCalledTimes(7);
    expect(array.length).toBe(7);
    expect(array).toContain(tree.root);
    expect(array).toContain(tree.root.left);
    expect(array).toContain(tree.root.right);
    expect(array).toContain(tree.root.left.right);
    expect(array).toContain(tree.root.left.left);
    expect(array).toContain(tree.root.right.left);
    expect(array).toContain(tree.root.right.right);
  })
});
