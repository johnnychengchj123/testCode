function twoSum(nums, target) {
  const hashtable = new Map()

  for (let i = 0; i < nums.length; ++i) {
      if (hashtable.has(target - nums[i])) {
          return [hashtable.get(target - nums[i]), i];
      }
      hashtable.set(nums[i], i);
  }
  return [];
}