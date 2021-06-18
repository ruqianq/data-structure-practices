import {getTreeHeight, Node} from './Node'
// Given the root of a binary tree,
// return the sum of values of its leaves.

export function isLeaf(node: Node) {
    return !(node.left || node.right);
}

/**
 * @param {Node} root
 * @return {number}
 */
export function leavesSum(root: Node) {
    let sum = 0
    let cur = root
    if (isLeaf(root)) {
        return root.value
    }

    function helper(node) {
        if (node.left) {
            helper(node.left)
        }
        if (node.right) {
            helper(node.right)
        }
        if (isLeaf(node)) {
            sum += node.value
        }
    }

    helper(cur)
    return sum
}

/**
 * @param {Node} root
 * @return {number}
 */
export function DeepestLeavesSum(root: Node) {
    let sum = 0
    let cur = root
    if (isLeaf(root)) {
        return root.value
    }
    const treeHeight = getTreeHeight(root, 1)
    function helper(node, depth) {
        if (node.left) {
            helper(node.left, depth + 1)
        }
        if (node.right) {
            helper(node.right, depth + 1)
        }
        if (isLeaf(node) && depth == treeHeight) {
            sum += node.value
        }
    }
    helper(cur, 1)
    return sum
}