// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most
// one element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that
// (0 <= i <= n - 2).

/**
 * @param {number[]} numbers
 * @return {boolean}
 */

// Question: is the array sorted? no

const checkPossibility = function(numbers) {
    for (let i = 1, err = 0; i < numbers.length; i++)
        if (numbers[i] < numbers[i-1])
            if (err++ || (i > 1 && i < numbers.length - 1 && numbers[i-2] > numbers[i] && numbers[i+1] < numbers[i-1]))
                return false
    return true
};
