import TNode from "./TNode"

function getNodeDepth(node: TNode | null): number {
  if (node === null) {
    return 0;
  }

  let leftDepth: number = node.left !== null ? 1 : 0;
  leftDepth = leftDepth + getNodeDepth(node.left);

  let rightDepth: number = node.right !== null ? 1 : 0;
  rightDepth = rightDepth + getNodeDepth(node.right);

  return Math.max(leftDepth, rightDepth);
}

export { getNodeDepth }
