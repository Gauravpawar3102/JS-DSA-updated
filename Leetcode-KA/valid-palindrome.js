function isPalindrome(strg) {
  const string = strg.toLowerCase().replace(/[\W_]/gi, '');

  //   ?Naive code /Brute force
  //   const reversedString = string.split('').reverse().join('').toLowerCase();

  //   if (string === reversedString) {
  //     // console.log(true);
  //     return true;
  //   } else {
  //     // console.log(reversedString);
  //     // console.log(false);

  //     return false;
  //   }
  //   ?
  // ! Realmens code
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      //   console.log(false);

      return false;
    }
    left++;
    right--;
  }
  return true;
  //   console.log(true);
}
isPalindrome('A man, a plan , a canal:Panama');
