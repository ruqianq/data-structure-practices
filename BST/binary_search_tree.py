from node import Node

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = Node(value=value)
        cur = self.root
        while cur.left and cur.right:
            if value > cur.value:
                cur = cur.right
            else:
                cur = cur.left

        if value > cur.value:
            cur.right = Node(value)
        else:
            cur.left = Node(value)

        return self