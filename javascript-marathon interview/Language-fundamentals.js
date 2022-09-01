// ! lec 1 - Undefined and Null
// let x = 1;
// console.log(x);
// console.log(typeof x);

// console.log(undefined == null);
// console.log(undefined === null);

// let z = undefined;
// console.log(z);
// console.log(typeof z);
// ! lec 2 - functional Scope and Block scope

// function a() {
//   let x = 10;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();
// ! lec 3 - ASI-Automatic Semi-colon Insertion

// function test() {
//   return {//* output shows undefined when the the bracket is in the next line due to Automatic semi-colon insertion
//     a: 5,
//   };
// }
// const obj = test();
// console.log(obj);

// ! lec 4 - Rest Vs Spread operators

// *Rest operator
// function sum(...nums) {
//   console.log(nums);
// }

// sum((0, 11, 22), 1, 2, 3, 4);
// sum(1, 2, 3, 4, 5);
// sum(1, 2, 3, 4, 5, 6);

// *Spread operator
// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [...arr1, 6, 7, 8, 9];

// console.log(arr2);

// let arr1 = [1543, 5422, 3333, 423];

// console.log(Math.max(...arr1));

// ! lec 5 - When we get infinity as output

// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// console.log(9e4); //9 *1 0000= 90,000 it will add 4 zeros after 9
// console.log(9e400); //its greater than 64 bit
// console.log(-9e400);
// console.log(Number.MAX_VALUE);
// console.log(1 / 0);
// ! lec 6 - When we get NaN
// let a = 'Hi';
// let b = 5;

// console.log(a * b);
// ! lec 7 - Arrow Function
// const sumof = (a, b) => a + b; //no return required if only one statement
// sumof(2, 3);
// const sum = (a) => {
//   console.log(a);
// };
// sum(5);
