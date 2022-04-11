// let a, b;

// ?  If else

// function conditional(a, b) {
//   console.log('enter the value of a and b');

//   if (a > b) {
//     console.log(a + '  is greater than  ' + b);
//   } else {
//     console.log(b + '  is greater than  ' + a);
//   }
// }

// conditional(10, 12);

// ? while loop

// let i = 0;
// let a = 10;
// function whileloo(a) {
//   while (i <= a) {
//     console.log(i);
//     i+1;
//   }
// }
// whileloo(9);

// ?Sum of 2 numbers
// let a, b;
// function addition(a, b) {
//   return a + b;
// }
// addition(5, 6);

// ? sum of  N even numbers

// let num;
// function sumOfNNum(num) {
//   let sum = 0;
//   let i = 1;
//   for (i; i <= num; i++) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//       console.log(sum);
//     }
//   }
//   console.log(sum);
// }

// sumOfNNum(100);

// ?simple intrest

// function simpleIntrest(p, r, t) {
//   let sI = (p * r * t) / 100;

//   console.log(sI);
// }

// simpleIntrest(1, 2, 3);

//? Average of three numbers

// function averageOf3(a, b, c) {
//   const avg = a + b + c;

//   return avg / 3;
// }

// console.log(averageOf3(1, 2, 3));
// averageOf3(1, 2, 3);

// ? Average of n numbers
// let sum = 0;
// let avg;
// function averageOfN(n) {
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//     avg = sum / n;
//     console.log(sum);
//   }
//   console.log(avg);
// }
// averageOfN(100);

// ?print Odd or even

// function oddEven(num) {
//   let arreven = [];
//   let arrodd = [];
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       arreven.push(i);
//     } else if (i % 2 == 1) {
//       arrodd.push(i);
//     }
//   }
//   console.log(arreven);
//   console.log(arrodd);
// }

// oddEven(10);

// ?print factorial of n numbers
// !for factorial 0! is one
// function factorialOfN(num) {
//   if ((num = 0)) {
//     console.log('factorial of 0 is 1');
//   }
//   for (let i = 1; i <= num; i++) {
//     let fact = 1;
//     console.log((fact *= i));
//   }
// }

// factorialOfN(5);

// ?Prime number

// let isprime = false;

// function primeNumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 == 0) {
//       // console.log(i + 'is not a prime number');
//       isprime = false;
//     } else {
//       isprime = true;
//     }
//   }
//   if (isprime == true) {
//     console.log(num + 'is prime');
//   }
// }
// primeNumber(13);

// ?Patterns 1
// * * *
// * * *
// * * *

// function patterns1(n) {
//   let starStr = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       starStr += '* ';
//     }
//     starStr += '\n';
//   }
//   console.log(starStr);
// }

// patterns1(3);

// ?Patterns 2
// 1 1 1
// 2 2 2
// 3 3 3

// function patterns2(n) {
//   let starStr = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       starStr += `${i}`;
//     }
//     starStr += '\n';
//   }
//   console.log(starStr);
// }

// patterns2(3);

// ?Patterns 3
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// function patterns3(n) {
//   let starStr = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       starStr += `${j}`;
//     }
//     starStr += '\n';
//   }
//   console.log(starStr);
// }

// patterns3(4);

// ?Patterns 4
// 3 2 1
// 3 2 1
// 3 2 1

// function patterns3(n) {
//   let starStr = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       starStr += `${n-j+1}`;
//     }
//     starStr += '\n';
//   }
//   console.log(starStr);
// }

// patterns3(4);

// ?Patterns 5
// 1 2 3
// 4 5 6
// 7 8 9

// function patterns5(n) {
//   let starStr = '';
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       starStr += `${(count = count + 1)}`;
//     }
//     starStr += '\n';
//   }
//   console.log(starStr);
// }

// patterns5(3);

// ?Patterns 6
// *
// * *
// * * *
// * * * *

// function patterns6(n) {
//   let string = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       string += '* ';
//     }

//     string += '\n';
//   }
//   console.log(string);
// }

// patterns6(4);

// ?Patterns 7
// 1;
// 22;
// 333;
// 4444;

// function patterns6(n) {
//   let string = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       string += i;
//     }

//     string += '\n';
//   }
//   console.log(string);
// }

// patterns6(4);

// ?Patterns 8

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// function patterns6(n) {
//   let string = '';
//   for (let i = 1; i <= n; i++) {
//     let count = i;
//     for (let j = 1; j <= i; j++) {
//       string += count++ + ' ';
//       // string += i + j - 1 + ' ';
//     }

//     string += '\n';
//   }
//   console.log(string);
// }

// patterns6(4);

// ?Patterns 9
// 1
// 21
// 321
// 4321

// function patterns6(n) {
//   let string = '';
//   for (let i = 1; i <= n; i++) {
//     let count = i;
//     for (let j = 1; j <= i; j++) {
//       string += count-- + ' ';
//       // string += i + j - 1 + ' ';
//     }

//     string += '\n';
//   }
//   console.log(string);
// }

// patterns6(4);

// ?Patterns 10
// 1
// 21
// 321
// 4321

function patterns6(n) {
  let string = '';
  for (let i = 1; i <= n; i++) {
    let count = i;
    for (let j = 1; j <= i; j++) {
      string += count-- + ' ';
      // string += i + j - 1 + ' ';
    }

    string += '\n';
  }
  console.log(string);
}

patterns6(4);
