const printTree = function (root) {
    if (!root) return [];
    const level = findHeight(root);
    const width = 2 ** level - 1;

    // initialize result array
    let result = [];
    for (let i = 0; i < level; i++) {
        result.push(new Array(width).fill(''));
    }
    fillValues(result, root, 0, 0, width - 1);
    return result;
};

function findHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(findHeight(node.left), findHeight(node.right));
}

function fillValues(result, node, row, left, right) {
    if (!node) return;
    
    // record value
    const mid = Math.floor((right - left) / 2) + left;
    result[row][mid] = node.val.toString();
    
    // children
    fillValues(result, node.left, row + 1, left, mid - 1);
    fillValues(result, node.right, row + 1, mid + 1, right);
}
