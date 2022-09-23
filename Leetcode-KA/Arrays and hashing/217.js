function containsDuplicate(myArray) {
  let obj = {};
  for (let i = 0; i <= myArray.length - 1; i++) {
    if (obj[myArray[i]]) {
      console.log(true);

      return true;
    } else {
      obj[myArray[i]] = true;
      console.log(obj);
    }
  }
  console.log(false);
  return false;
}

containsDuplicate([1, 2, 3, 4]);
