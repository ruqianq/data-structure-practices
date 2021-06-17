import { isTheDeepestNode, deepestLeavesSum } from '../BST/DeepestLeavesSum'
import { Node } from '../BST/Node'

const deepestNode = new Node(1)
const moreNode = new Node(7)
moreNode.left = new Node(5)
moreNode.right = new Node(9)
moreNode.left.left = new Node(1)
moreNode.left.right = new Node(6)

test('Test the branch still have node', () => {
    expect(isTheDeepestNode(deepestNode)).toEqual(true)
})

test('If only has root, return the root value', () => {
    expect(deepestLeavesSum(deepestNode)).toEqual(1)
})

test('If more nodes return sum', () => {
    expect(deepestLeavesSum(moreNode)).toEqual(16)
})
