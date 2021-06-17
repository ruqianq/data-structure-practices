import { isTheDeepestNode, deepestLeavesSum } from '../BST/DeepestLeavesSum'
import { Node } from '../BST/Node'

const deepestNode = new Node(1)

test('Test the branch still have node', () => {
    expect(isTheDeepestNode(deepestNode)).toEqual(true)
})

test('If only has root, return the root value', () => {
    expect(deepestLeavesSum(deepestNode)).toEqual(1)
})
