function groupAnagrams(strs) {
  const sortedStrs = strs.map((word) => word.split('').sort().join(''));

  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedStrs[i]].push(strs[i]);
    }

    // if (
    //   strs[i].split('').sort().join('') === strs[i++].split('').sort().join('')
    // ) {
    //   FinalArray.push(strs[i]);
    // }else{

    // }

    // console.log(strs[i].split('').sort().join(''));
  }
  return Object.values(hash);
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
