export class Node {
    value: number
    left: Node
    right: Node

    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}// Given the root of a binary tree,
// return the sum of values of its deepest leaves.
export function getTreeHeight(node) {
    if (node == null)
        return 0;
    else {
        let lDepth = getTreeHeight(node.left);
        let rDepth = getTreeHeight(node.right);

        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}