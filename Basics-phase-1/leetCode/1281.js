function sumOfDigits(n) {
  let product = 1;
  let sum = 0;

  while (n != 0) {
    // console.log(n);//234//23//2
    let digit = n % 10;
    // console.log(digit);//4//3//2
    product = product * digit;
    sum = sum + digit;
    // console.log(sum, '-', product); //4//3//2

    let flooor = n / 10;
    n = Math.floor(flooor); //23
  }

  console.log(product - sum);
}
sumOfDigits(234);
