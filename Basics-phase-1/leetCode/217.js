function containsDuplicate(inputArray) {
  const input = inputArray;
  let memory = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(input[inputItem]);
    // console.log(inputItem);

    // for (j = 0; j < input.length; j++) {
    //   console.log('----' + input[inputItem] + '--' + inputItem);
    // }
    // inputItem++;

    if (memory[input[i]] === undefined) {
      memory[input[i]] = '🐱‍🏍';
      console.log(false);
    } else {
      memory[input[i]] = "i'm back";
      console.log(true);
      return true;
    }
  }
  return false;
}

containsDuplicate([1, 3, 1, 9, 78, 5]);
