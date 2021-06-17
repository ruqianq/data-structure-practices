import { isTheDeepestNode } from '../BST/DeepestLeavesSum'
import { Node } from '../BST/Node'

const deepestNode = new Node(1)

test('Test the branch still have node', () => {
    expect(isTheDeepestNode(deepestNode)).toEqual(true)
})
