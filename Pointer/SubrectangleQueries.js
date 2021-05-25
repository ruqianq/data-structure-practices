// Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the
// constructor and supports two methods:
//
// 1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)
//
// Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right
// coordinate is (row2,col2).
// 2. getValue(int row, int col)
//
// Returns the current value of the coordinate (row,col) from the rectangle.

// Constraints:
//
// There will be at most 500 operations considering both methods: updateSubrectangle and getValue. (no nested loop)
// 1 <= rows, cols <= 100
// rows == rectangle.length
// cols == rectangle[i].length
// 0 <= row1 <= row2 < rows
// 0 <= col1 <= col2 < cols
// 1 <= newValue, rectangle[i][j] <= 10^9
// 0 <= row < rows
// 0 <= col < cols

// Question: Can I assume there is no null value in rectangle[i][j]?

class SubrectangleQueries {
    constructor(rectangle) {
        this.rows = rectangle.length
        this.cols = rectangle[0].length
        this.rectangle = rectangle
    }
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        let pr = row1;
        let pc = col1;
        while (pr <= row2) {
            while (pc <= col2) {
                this.rectangle[pr][pc] = newValue
                pc ++
            }
            pr ++
            pc = col1
        }
        return this.rectangle
    };

    getValue(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.rectangle[row][col]
        }
        return null
    }
}