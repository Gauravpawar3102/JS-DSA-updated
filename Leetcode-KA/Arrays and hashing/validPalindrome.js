function isPalindrome(s) {
  let op1 = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let op2 = op1.split('').reverse().join('');

  if (op1 === op2) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('A man, a plan, a canal: Panama');
