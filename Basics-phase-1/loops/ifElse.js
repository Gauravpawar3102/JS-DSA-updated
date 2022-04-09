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
function factorialOfN(num) {
  if ((num = 0)) {
    console.log('factorial of 0 is 1');
  }
  for (let i = 1; i <= num; i++) {
    let fact = 1;
    console.log((fact *= i));
  }
}

factorialOfN(5);
