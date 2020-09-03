// Too slow!!!
function oldFib(n) {
  if (n <= 2) return 1;
  return oldFib(n - 1) + oldFib( n - 2 )
}

// Use memoization to store the repeated sub problems
function newFib(n, memo = []) {
  if (memo[n]) {
    return memo[n]
  }
  if (n <= 2) return 1;
  const res = newFib(n - 1, memo) + newFib( n - 2, memo)
  memo[n] = res
  return res
}