import { isLeaf, leavesSum, DeepestLeavesSum} from '../BST/LeavesSum'
import {getTreeHeight, Node} from '../BST/Node'

const deepestNode = new Node(1)
const moreNode = new Node(7)
moreNode.left = new Node(5)
moreNode.right = new Node(9)
moreNode.left.left = new Node(1)
moreNode.left.right = new Node(6)

const oneMoreNode = new Node(10)
oneMoreNode.left = new Node(5)
oneMoreNode.right = new Node(12)
oneMoreNode.right.left = new Node(11)
oneMoreNode.right.right = new Node(13)

test('Test the branch still have node', () => {
    expect(isLeaf(deepestNode)).toEqual(true)
})

test('If only has root, return the root value', () => {
    expect(leavesSum(deepestNode)).toEqual(1)
})

test('If more nodes return sum', () => {
    expect(leavesSum(moreNode)).toEqual(16)
})

test('Test the return 1 if cur is root', () => {
    expect(getTreeHeight(deepestNode, 1)).toEqual(1)
})

test('Test the return of the binary tree layers', () => {
    expect(getTreeHeight(moreNode, 1)).toEqual(3)
})

test('More Test the return of the binary tree layers', () => {
    expect(getTreeHeight(oneMoreNode, 1)).toEqual(3)
})

test('Test the deepestLeaveSum', () => {
    expect(DeepestLeavesSum(moreNode)).toEqual(7)
})
