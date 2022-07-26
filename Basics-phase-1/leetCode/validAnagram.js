const validAnagram = (s, t) => {
  //   let memory1 = new Set();
  //   let memory2 = new Set();
  //   if (s.length === t.length) {
  //     for (let i = 0; i < s.length; i++) {
  //       //   console.log(s[i]);
  //       memory1.add(s[i]);
  //       memory2.add(t[i]);
  //     }
  //     if (memory1 === memory2) {
  //       return true;
  //     } else return false;
  //   } else {
  //     console.log(memory1, memory2);
  //     return false;
  //   }
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  if (sortedS === sortedT) {
    return true;
  } else {
    return false;
  }
};

validAnagram('anagram', 'nagaram');
