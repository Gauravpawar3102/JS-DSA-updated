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

// ? sum of  N even numbers

let num;
function sumOfNNum(num) {
  let sum = 0;
  let i = 1;
  for (i; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
      console.log(sum);
    }
  }
  console.log(sum);
}

sumOfNNum(100);
