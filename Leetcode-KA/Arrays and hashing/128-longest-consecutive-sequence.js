function longestConsecutive(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  const set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (set.has(num)) {
      continue;
    }
    let curMax = 1;
    let curNum = num;
    while (set.has(curNum + 1)) {
      curNum++;
      curMax++;
    }
    max = Math.max(max, curMax);
  }
  return max;
}
