// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most
// one element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that
// (0 <= i <= n - 2).

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Question: is the array sorted? no

const checkPossibility = function(nums) {
    let pIdx = 1;
    let prevIdx = 0;
    let countOfChange = 0
    while (pIdx <= nums.length) {
        if (nums[pIdx] < nums[prevIdx]) {
            countOfChange ++
        }
        if (countOfChange > 2) {
            return false
        }
        pIdx ++
        prevIdx ++
    }

    return nums.length > 0;
};

// fail on [4, 2, 1]