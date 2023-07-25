"use strict";
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
