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
    expect(node.right).toBeNull();
    expect(node.left).toBeNull();
  })
})
