"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TNode {
    constructor(value) {
        this.value = value;
        this.less = null;
        this.more = null;
    }
    compareTo(other) {
        return this.value - other.value;
    }
}
exports.default = TNode;
