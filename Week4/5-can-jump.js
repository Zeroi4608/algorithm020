/**
 * @url https://leetcode-cn.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length - 1;
  var leftPos = len;
  for (let left = len; left >= 0; left--) {
    if (nums[left] + left >= leftPos) {
      leftPos = left;
    }
  }
  return leftPos == 0;
};
