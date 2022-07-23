function mergeSortedArrays() {
  const arr1 = [0, 3, 4, 31];
  const arr2 = [4, 6, 30];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i + 1] < arr1.length) {
      console.log(arr1[i], arr1[i + 1]);
    }
    // console.log(arr1[i]);
  }
}

mergeSortedArrays();
