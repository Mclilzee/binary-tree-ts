class TNode {
  readonly value: number;
  left: TNode | null;
  right: TNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default TNode;
