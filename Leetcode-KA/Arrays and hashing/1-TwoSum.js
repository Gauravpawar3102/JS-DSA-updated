function twoSum(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log([i, j]);
      }
    }
  }
}
twoSum([3, 2, 4], 6);
