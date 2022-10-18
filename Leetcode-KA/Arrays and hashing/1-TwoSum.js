// ?Brute force
// function twoSum(arr, target) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log([i, j]);
//       }
//     }
//   }
// }
// twoSum([3, 2, 4], 6);
// ?optimal
function twoSum(arr, target) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let diff = target - value;
    if (object[diff] === undefined) {
      object[value] = i;
    } else {
      [object[diff], i];
      console.log([object[diff], i]);
    }
  }
  console.log(object);
}
twoSum([3, 2, 3], 6);
