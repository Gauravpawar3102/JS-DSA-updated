function groupAnagrams(strs) {
  let sortedArray = [];
  let resultArray = [];
  for (let i = 0; i < strs.length; i++) {
    sortedArray.push(strs[i].split('').sort().join(''));
  }
  sortedArray.sort();
  for (let j = 0; j < sortedArray.length; j++) {
    if (sortedArray[j] === sortedArray[j + 1]) {
      resultArray.push([sortedArray[j], sortedArray[j + 1]]);
    } else {
      resultArray.push([sortedArray[j]]);
    }
  }

  console.log(sortedArray);
  console.log(resultArray);
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
