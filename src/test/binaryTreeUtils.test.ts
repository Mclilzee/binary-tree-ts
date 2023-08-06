import { beforeEach, describe, expect, test } from "@jest/globals";
import { getNodeDepth } from "../binaryTreeUtils";
import TNode from "../TNode";
import BinaryTree from "../BinaryTree";


describe("Find correct depth of each node", () => {
  const tree = new BinaryTree();

  test("Root depth is 0 if doesn't contain links", () => {
    const depth = getNodeDepth(new TNode(5));
    expect(depth).toBe(0);
  })

  test("Depth is 0 if root is null", () => {
    const depth = getNodeDepth(null);
    expect(depth).toBe(0);
  })

  test("Depth is 1 if right link is extended", () => {
    const node = new TNode(5);
    node.right = new TNode(10);
    const depth = getNodeDepth(node);
    expect(depth).toBe(1);
  })

  test("Depth is 1 if left link is extended", () => {
    const node = new TNode(10);
    node.left = new TNode(5);
    const depth = getNodeDepth(node);
    expect(depth).toBe(1);
  })

  test("Depth depends on deepest link on right side if exists", () => {
    tree.buildNewTree([10, 5, 20, 30]);
    const depth = getNodeDepth(tree.root);
    expect(depth).toBe(2);
  })

  test("Depth depends on deepeste link on left side if exists", () => {
    tree.buildNewTree([10, 5, 20, 4]);
    const depth = getNodeDepth(tree.root);
    expect(depth).toBe(2);
  })

  test("Depth is correct for complex tree", () => {
    tree.buildNewTree([20, 30, 1, 2, 5, 15, 62, -6, 10, 14, 16, 60])
    let depth = getNodeDepth(tree.root);
    expect(depth).toBe(6);

    depth = getNodeDepth(tree.root.left);
    expect(depth).toBe(5);

    depth = getNodeDepth(tree.root.right);
    expect(depth).toBe(2);
  })

})
