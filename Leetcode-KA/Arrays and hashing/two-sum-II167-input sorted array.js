function twoSum(numbers, target) {
  let object = {};
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    let diff = target - value;
    if (object[diff] === undefined) {
      object[value] = i + 1;
    } else {
      return [object[diff], i + 1];
    }
  }
}
