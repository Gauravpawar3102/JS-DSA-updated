function productOfArray(nums) {
  let output = nums.map((n) => 1);
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product = product * nums[i];
  }
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product;
    product = product * nums[j];
    console.log(product);
  }
  console.log(output);
}

productOfArray([-1, 1, 0, -3, 3]);
// productOfArray([-1, 1, 0, -3, 3]);
