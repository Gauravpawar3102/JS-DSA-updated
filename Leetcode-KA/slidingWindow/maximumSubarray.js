function maxSubArray(nums) {
  let curSum = 0;
  let maxSubArray = nums[0];
  for (let i = 0; i < nums.length; i++) {
    cursum = curSum + nums[i];
    maxSubArray = Math.max(curSum, maxSubArray);
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSubArray;
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
