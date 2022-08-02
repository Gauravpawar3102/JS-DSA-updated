function groupAnagrams(strs) {
  const sortedStrs = [];
  const FinalArray = [];
  const sortedArray = sortedStrs.sort();

  for (let i = 0; i < strs.length; i++) {
    sortedStrs.push(strs[i].split('').sort().join(''));

    // if((strs[i].split('').sort().join('').sort() ===    )

    // console.log(strs[i].split('').sort().join(''));
  }

  console.log(sortedArray);
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
