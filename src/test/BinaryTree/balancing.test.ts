import { describe, test, expect } from "@jest/globals";
import BinaryTree from "../../BinaryTree";

describe("Check if tree is balance", () => {
  test("Tree with null root is balance", () => {
    const tree = new BinaryTree();
    expect(tree.isBalanced()).toBe(true);
  });

  test("Tree is balanced if only has root", () => {
    const tree = new BinaryTree(5);
    expect(tree.isBalanced()).toBe(true);
  });

  test("Tree is balanced if right link is one level deep", () => {
    const tree = new BinaryTree(5);
    tree.add(6);
    expect(tree.isBalanced()).toBe(true);
  })

  test("Tree is balanced if left link is one level deep", () => {
    const tree = new BinaryTree(6);
    tree.add(2);
    expect(tree.isBalanced()).toBe(true);
  })

  test("Tree is balanced if height difference is less than or equals to 1", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 25, 10, 15, 5]);
    expect(tree.isBalanced()).toBe(true);

    tree.buildNewTree([20, 10, 5, 15, 25, 30]);
    expect(tree.isBalanced()).toBe(true);
  })

  test("Tree is unbalanced if absolute height difference is more than 1", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 25, 10, 15, 12, 5]);
    expect(tree.isBalanced()).toBe(false);

    tree.buildNewTree([100, 50, 60, 40, 200, 300, 400, 350]);
    expect(tree.isBalanced()).toBe(false);
  })

  test("Tree is unbalanced if children are balanced and height is more than 1", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([20, 10, 5]);
    expect(tree.isBalanced()).toBe(false);

    tree.buildNewTree([30, 20, 15, 10, 5]);
    expect(tree.isBalanced()).toBe(false);
  })

  test("Tree is unbalanced if children is unbalanced", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([100, 50, 40, 60, 70, 80, 65, 64, 200, 300, 400, 500, 450, 600]);
    expect(tree.isBalanced()).toBe(false);
  })

  test("Tree balanced for complex tree structure", () => {
    const tree = new BinaryTree();
    tree.buildNewTree([100, 200, 300, 400, 500, 450, 600, 50, 60, 70, 80, 90, 65, 64, 40, 30, 20, 25, 35, 45, 43, 42, 46, 55, 53, 180, 150, 170, 160, 190, 195, 140, 130, 250, 240, 350]);
    expect(tree.isBalanced()).toBe(true);
  })
})

// describe("Balancing an unbalanced binary tree", () => {
//   test("Balancing tree on the left side", () => {
//     const tree = new BinaryTree();
//     tree.buildNewTree([20, 10, 5])
//     expect(tree.isBalanced()).toBe(false);
//
//     tree.balanceTree();
//     expect(tree.isBalanced()).toBe(true);
//   })
//
// })
