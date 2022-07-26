function containsDuplicate(inputArray) {
  // !Brute Force
  // const input = inputArray;
  // let memory = {};
  // for (let i = 0; i < input.length; i++) {

  //   if (memory[input[i]] === undefined) {
  //     memory[input[i]] = '🐱‍🏍';
  //   } else {
  //     memory[input[i]] = "i'm back";
  //     return true;
  //   }
  // }
  // return false;
  // !optimal
  let numbers = new Set();
  for (let num of inputArray) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }

  return false;
}

containsDuplicate([1, 3, 1, 9, 78, 5]);
