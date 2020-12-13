/**
 * @url https://leetcode-cn.com/problems/assign-cookies/description/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let count = 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  for (let i = 0; i < g.length; i++) {
    let content = g[i];
    if (!s.length) {
        break;
    }
    while (s.length) {
      let min = s.shift();
      if (min >= content) {
        count += 1;
        break;
      }
    }
  }
  return count;
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);
