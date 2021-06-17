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
export function deepestLeavesSum(root) {

}