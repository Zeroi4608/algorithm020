/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const generateFunc = (str, left, right) => {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }

    if (left < n) {
      generateFunc(str + "(", left + 1, right);
    }

    if (right < left) {
      generateFunc(str + ")", left, right + 1);
    }
  };
  generateFunc("", 0, 0);
  return res;
};
