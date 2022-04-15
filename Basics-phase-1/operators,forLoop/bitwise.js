// function operators() {
//   let a = 4;
//   let b = 6;

//   console.log(a & b);
//   console.log(a | b);
//   console.log(~a);
//   console.log(a ^ b);
// }

// operators();

// ?sum of n numbers

// function sumOfN(n) {
//   let sum = 0;
//   for (i = 0; i <= n; i++) {
//     console.log((sum += i));
//   }
// }

// sumOfN(100);

// ?Fibonacci

// function Fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   console.log(`${a} \n${b}`);

//   for (i = 0; i <= n; i++) {
//     let sum = a + b;
//     console.log(sum);

//     a = b;
//     b = sum;
//   }
// }

// Fibonacci(4);

// ?Prime number

function primeNumber(num) {
  let isprime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      // console.log(i + 'is not a prime number');
      isprime = false;
      break;
    }
  }
  if (isprime == true) {
    console.log(num + 'is prime');
  } else {
    console.log(num + 'is not a prime');
  }
}
primeNumber(9);
