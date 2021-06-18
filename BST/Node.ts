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
export function getTreeHeight(node: Node, startLayer) {
    if (node.left == null && node.right == null)
        return startLayer;

    let leftHeight = getTreeHeight(node.left, startLayer + 1)
    let rightHeight = getTreeHeight(node.right, startLayer + 1)

    if (leftHeight > rightHeight) {
        return leftHeight
    } else {
        return rightHeight
    }
}