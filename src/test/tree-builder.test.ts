import { test, expect } from '@jest/globals';
import BinaryTree from '../tree-builder';

test("Return no error when empty array passed", () => {
  const numbers: number[] = [];
  const root = new BinaryTree(numbers).root;
  expect(root).not.toBeNull();
  expect(root.value).toBe(0);
})

test("Return correct root", () => {
  const numbers = [1];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(1);
})


test("Return correct right link when more values given", () => {
  const numbers = [3, 5];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(3);
  expect(root.right).not.toBeNull();
  expect(root.right!.value).toBe(5);
})

test("Return correct left link when less value given", () => {
  const numbers = [8, 4];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(8);
  expect(root.left).not.toBeNull();
  expect(root.left!.value).toBe(4);
})

test("Return correct left and right links", () => {
  const numbers = [6, 2, 9];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(6);
  expect(root.left!.value).toBe(2);
  expect(root.right!.value).toBe(9);
})

test("Work with more values", () => {
  const numbers = [8, 10, 2, 1];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(8);
  expect(root.right!.value).toBe(10);
  expect(root.left!.value).toBe(2);
  expect(root.left!.left!.value).toBe(1);
})

test("Skips duplicate values", () => {
  const numbers = [8, 8, 8, 10, 2, 1];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(8);
  expect(root.right!.value).toBe(10);
  expect(root.left!.value).toBe(2);
  expect(root.left!.left!.value).toBe(1);
})

test("Work with complicated array", () => {
  const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
  const root = new BinaryTree(numbers).root;
  expect(root.value).toBe(15);
  expect(root.right!.value).toBe(20);
  expect(root.right!.right!.value).toBe(33);
  expect(root.right!.right!.left).toBeNull();
  expect(root.right!.right!.right!.value).toBe(66);
  expect(root.right!.right!.right!.right).toBeNull();
  expect(root.right!.right!.right!.left).toBeNull();
  expect(root.right!.left!.value).toBe(17);
  expect(root.right!.left!.right).toBeNull();
  expect(root.right!.left!.left).toBeNull();
  expect(root.left!.value).toBe(1);
  expect(root.left!.left!.value).toBe(0);
  expect(root.left!.left!.right).toBeNull();
  expect(root.left!.left!.left!.value).toBe(-5);
  expect(root.left!.left!.left!.right).toBeNull();
  expect(root.left!.left!.left!.left).toBeNull();
  expect(root.left!.right!.value).toBe(3);
  expect(root.left!.right!.left).toBeNull();
  expect(root.left!.right!.right!.value).toBe(5);
  expect(root.left!.right!.right!.right).toBeNull();
  expect(root.left!.right!.right!.left).toBeNull();
})
