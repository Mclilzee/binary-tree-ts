import TNode from "./TNode";

function levelOrder(root: TNode, callback: (n: TNode) => void) {
  callback(root);

  if (root.right !== null) {
    levelOrder(root.right, callback);
  }

  if (root.left !== null) {
    levelOrder(root.left, callback);
  }
}

export { levelOrder };
