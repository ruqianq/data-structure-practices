import {Node} from "./Node";

export class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val)
            return this
        }
        let cur = this.root
        while (cur.right && cur.left) {
            if (val > cur.value) {
                cur = cur.right
            } else {
                cur = cur.left
            }
        }
        if (val > cur.value) {
            cur.right = new Node(val)
        } else {
            cur.left = new Node(val)
        }
        return this
    }

    find(val) {
        if (!this.root) {
            return false
        }
        let cur = this.root;
        let found = false
        while (cur && !found) {
            if (val > cur.value) {
                cur = cur.right
            } else if (val < cur.value) {
                cur = cur.left
            } else {
                found = true
            }
        }
        if (!found) {
            return false
        }
        return cur
    }

    bfs() {
        let data = [];
        let queue = [];
        let node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

        }
        return data
    }

    dfs_pre() {
        let data = [];
        let cur = this.root;

        function helper(node) {
            data.push(node.value)
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }

        helper(cur)
        return data
    }

    dfs_post() {
        let data = [];
        let cur = this.root;

        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
            data.push(node.value)
        }

        helper(cur)
        return data
    }

    dfs_order() {
        let data = [];
        let cur = this.root;

        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            data.push(node.value)
            if (node.right) {
                helper(node.right)
            }
        }

        helper(cur)
        return data
    }
}
