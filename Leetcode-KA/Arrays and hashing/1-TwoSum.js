function twoSum(arr, target) {
  const object = {};
  for (let i = 0; i < arr.length; i++) {
    const currentMapValue = object[arr[i]];
    if (currentMapValue >= 0) {
      return [currentMapValue, i];
    } else {
      const numberToFind = target - currentMapValue;
      object[numberToFind] = i;
    }
  }
  return null;
}
twoSum([2, 7, 11, 15], 9);
