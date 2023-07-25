class TNode {
  readonly value: number;
  less: TNode | null;
  more: TNode | null;

  constructor(value: number) {
    this.value = value;
    this.less = null;
    this.more = null;
  }

  compareTo(other: TNode): number {
    return this.value - other.value;
  }
}

export default TNode;
