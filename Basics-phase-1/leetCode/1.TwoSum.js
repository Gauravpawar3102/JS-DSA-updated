function twoSum(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(numsMap);
    //  21-3=18    = {   numsMap.0 =18     }
    const currentMapVal = numsMap[nums[i]];
    // console.log(currentMapVal);

    if (currentMapVal >= 0) {
      // if numberToFind is positive   18 , 0
      return [currentMapVal, i];
    } else {
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }

  return null;
}
twoSum([3, 5, 7, 11, 14], 21);
