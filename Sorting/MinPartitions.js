// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros.
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary
// numbers needed so that they sum up to n.

// 1 <= n.length <= 105
// n consists of only digits.
// n does not contain any leading zeros and represents a positive integer.

// Question 1: can we have repeated number? yes
// question 2: can we use math.max yes
// Just for clarification, the spread operation for array of string if the string can not convert to number it will
// receive NaN

/**
 * @param {string} n
 * @return {number}
 */

const minPartitions = function(n) {
    const digits = n.split('')
    return Math.max(...digits)
};

