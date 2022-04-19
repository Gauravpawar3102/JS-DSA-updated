function reverseInteger(num) {
  let number = num.toString().split('').reverse().join('');
  let numtoint = parseInt(number) * Math.sign(num);

  console.log(numtoint);
  if (numtoint <= -Math.pow(2, 31) || numtoint >= Math.pow(2, 31) - 1) {
    return numtoint;
  } else {
    return 0;
  }
}
reverseInteger(-123);
