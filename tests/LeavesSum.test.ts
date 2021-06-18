import { isTheleaf, leavesSum } from '../BST/LeavesSum'
import { Node } from '../BST/Node'

const deepestNode = new Node(1)
const moreNode = new Node(7)
moreNode.left = new Node(5)
moreNode.right = new Node(9)
moreNode.left.left = new Node(1)
moreNode.left.right = new Node(6)

test('Test the branch still have node', () => {
    expect(isTheleaf(deepestNode)).toEqual(true)
})

test('If only has root, return the root value', () => {
    expect(leavesSum(deepestNode)).toEqual(1)
})

test('If more nodes return sum', () => {
    expect(leavesSum(moreNode)).toEqual(16)
})
