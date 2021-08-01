# You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
#
# Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
#
# The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        from collections import deque
        q = deque()
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] == 0:
                    q.append((i, j))
        result = 0
        while q:
            x, y = q.popleft()
            for dirr in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                newX, newY = x + dirr[0], y + dirr[1]
                if grid[newX][newY] != 1:
                    result += 1
        return result