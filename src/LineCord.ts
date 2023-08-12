class LineCord {
  readonly length: number;
  readonly x: number;
  readonly y: number;
  readonly angle: number;
  readonly thickness: number;

  constructor(start: HTMLDivElement, end: HTMLDivElement, thickness: number) {
    this.thickness = thickness;
    const e1 = this.getOffset(start);
    const e2 = this.getOffset(end);

    const width = (start.clientWidth + end.clientWidth) / 2;
    this.length = Math.sqrt(((e2.x - e1.x) * (e2.x - e1.x)) + ((e2.y - e1.y) * (e2.y - e1.y))) - width;
    this.x = ((e1.x + e2.x) / 2) - (this.length / 2);
    this.y = ((e1.y + e2.y) / 2) - (this.thickness / 2);
    this.angle = Math.atan2((e1.y - e2.y), (e1.x - e2.x)) * (180 / Math.PI);
  }

  private getOffset(element: HTMLDivElement) {
    const rect = element.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
  }
}

export default LineCord;
