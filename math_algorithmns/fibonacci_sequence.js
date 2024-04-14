// given a number "n", find the first "n" elements of the fibonacci sequence
//fibonacci sequence is a sequence in which each number is the sum of the precceding ones
//example fibonacci(2) = [0,1] fibonacci(3) = [0,1,1]
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
console.log(fibonacci(5)); //[ 0, 1, 1, 2, 3 ]

//BIG 0 = o(n);
