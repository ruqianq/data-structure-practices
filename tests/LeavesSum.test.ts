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

const anotherNode = new Node(1)
anotherNode.left = new Node(2)
anotherNode.right = new Node(3)
anotherNode.left.left = new Node(4)
anotherNode.left.left.left = new Node(7)
anotherNode.left.right = new Node(5)
anotherNode.right.right = new Node(6)
anotherNode.right.right.right = new Node(8)

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
    expect(getTreeHeight(deepestNode)).toEqual(1)
})

test('Test the return of the binary tree layers', () => {
    expect(getTreeHeight(moreNode)).toEqual(3)
})

test('More Test the return of the binary tree layers', () => {
    expect(getTreeHeight(oneMoreNode)).toEqual(3)
})

test('More Test the return of the binary tree layers', () => {
    expect(getTreeHeight(anotherNode)).toEqual(4)
})

test('Test the deepestLeaveSum', () => {
    expect(DeepestLeavesSum(moreNode)).toEqual(7)
})

test('Test the deepestLeaveSum', () => {
    expect(DeepestLeavesSum(anotherNode)).toEqual(15)
})
