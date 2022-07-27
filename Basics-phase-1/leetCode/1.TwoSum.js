function twoSum(nums, target) {
  // let output = new Set();
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    // console.log(numberToFind);
    for (let j = i + 1; j < nums.length; j++) {
      if (numberToFind === nums[j]) {
        // console.log(
        //   'log ' + nums.indexOf(nums[i]) + ' ' + nums.indexOf(nums[j])
        // );
        // output.add([nums.indexOf(nums[i]), nums.indexOf(nums[j])]);

        // console.log([nums.indexOf(nums[i]), nums.indexOf(nums[j])]);

        console.log([i, j]);

        // console.log([nums[i], nums[j]]);
        // console.log([nums.indexOf(nums[i]), nums.indexOf(nums[j])]);
        // console.log(output);
      }
      //   console.log('* * *' + nums[j]);
    }
  }
}

twoSum([3, 3], 6);
