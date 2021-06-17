// Given the root of a binary tree,
// return the sum of values of its deepest leaves.
import { Node } from './Node'

export function isTheDeepestNode(node: Node) {
    return !(node.left || node.right);
}

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root
 * @return {number}
 */
export function deepestLeavesSum(root: Node) {
    let sum = 0
    let cur = root
    if (isTheDeepestNode(root)) {
        return root.value
    }
    function helper(node) {
        if (node.left) {
            helper(node.left)
        }
        if (node.right) {
            helper(node.right)
        }
        if (isTheDeepestNode(node)) {
            sum += node.value
        }
    }
    helper(cur)
    return sum
}