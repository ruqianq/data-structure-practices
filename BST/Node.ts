export class Node {
    value: number
    left: Node
    right: Node
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}