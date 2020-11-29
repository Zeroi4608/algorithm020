// 1 两数之和

// 遍历所有可能性
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// a + b = c  =>  b = c - a
var twoSum1 = function (nums = [], target) {
  let n = nums.length;
  while (n > 1) {
    let last = nums.pop();
    if (nums.includes(target - last)) {
      return [nums.indexOf(target - last), nums.length];
    }
    n--;
  }
};