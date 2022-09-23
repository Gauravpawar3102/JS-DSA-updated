function isAnagram(s, t) {
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    // console.log('true');
    return true;
  } else {
    // console.log('false');
    return false;
  }
}

isAnagram('anagram', 'nagasram');
