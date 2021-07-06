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

    def find(self, value):
        if not self.root:
            return False

        cur = self.root
        found = False
        while cur and found is True:
            if value > cur.value:
                cur = cur.right
            elif value < cur.value:
                cur = cur.left
            else:
                found = True
        if found is False:
            return False

        return cur


