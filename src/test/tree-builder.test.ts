import { test, expect } from '@jest/globals';
import buildTree from '../tree-builder';

test("Return no error when empty array passed", () => {
  const numbers: number[] = [];
  const result = buildTree(numbers);
  expect(result).not.toBeNull();
  expect(result.value).toBe(0);
})

test("Return correct root", () => {
  const numbers = [1];
  const result = buildTree(numbers);
  expect(result.value).toBe(1);
})


test("Return correct right link when more values given", () => {
  const numbers = [3, 5];
  const result = buildTree(numbers);
  expect(result.value).toBe(3);
  expect(result.right).not.toBeNull();
  expect(result.right!.value).toBe(5);
})

test("Return correct left link when less value given", () => {
  const numbers = [8, 4];
  const result = buildTree(numbers);
  expect(result.value).toBe(8);
  expect(result.left).not.toBeNull();
  expect(result.left!.value).toBe(4);
})

test("Return correct left and right links", () => {
  const numbers = [6, 2, 9];
  const result = buildTree(numbers);
  expect(result.value).toBe(6);
  expect(result.left!.value).toBe(2);
  expect(result.right!.value).toBe(9);
})

test("Work with more values", () => {
  const numbers = [8, 10, 2, 1];
  const result = buildTree(numbers);
  expect(result.value).toBe(8);
  expect(result.right!.value).toBe(10);
  expect(result.left!.value).toBe(2);
  expect(result.left!.left!.value).toBe(1);
})

test("Skips duplicate values", () => {
  const numbers = [8, 8, 8, 10, 2, 1];
  const result = buildTree(numbers);
  expect(result.value).toBe(8);
  expect(result.right!.value).toBe(10);
  expect(result.left!.value).toBe(2);
  expect(result.left!.left!.value).toBe(1);
})

test("Work with complicated array", () => {
  const numbers = [15, 20, 33, 1, 0, 3, 5, -5, 20, 66, 1, 17];
  const result = buildTree(numbers);
  expect(result.value).toBe(15);
  expect(result.right!.value).toBe(20);
  expect(result.right!.right!.value).toBe(33);
  expect(result.right!.right!.left).toBeNull();
  expect(result.right!.right!.right!.value).toBe(66);
  expect(result.right!.right!.right!.right).toBeNull();
  expect(result.right!.right!.right!.left).toBeNull();
  expect(result.right!.left!.value).toBe(17);
  expect(result.right!.left!.right).toBeNull();
  expect(result.right!.left!.left).toBeNull();
  expect(result.left!.value).toBe(1);
  expect(result.left!.left!.value).toBe(0);
  expect(result.left!.left!.right).toBeNull();
  expect(result.left!.left!.left!.value).toBe(-5);
  expect(result.left!.left!.left!.right).toBeNull();
  expect(result.left!.left!.left!.left).toBeNull();
  expect(result.left!.right!.value).toBe(3);
  expect(result.left!.right!.left).toBeNull();
  expect(result.left!.right!.right!.value).toBe(5);
  expect(result.left!.right!.right!.right).toBeNull();
  expect(result.left!.right!.right!.left).toBeNull();
})
