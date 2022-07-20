// function reverse(str) {
//   let string = str.split('');
//   let revString = [];

//   for (let i = string.length - 1; i >= 0; i--) {
//     revString.push(str[i]);
//   }
//   console.log(revString.join(''));
// }

// reverse('array is  as  cool as me');

function revString(s) {
  console.log(s.split('').reverse());
}
revString('hello');
