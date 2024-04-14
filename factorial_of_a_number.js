//Given an interger n find the factorial of that interger
//factorial of n = n!
//example factorial(4) = 4 * 3 * 2 * 1 = 24

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(0)); //1
console.log(factorial(4)); //24
console.log(factorial(6)); //720
console.log(factorial(5)); //120

//BIG-O = O(n)
