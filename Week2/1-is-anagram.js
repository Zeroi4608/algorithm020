// 242 有效的字母异位
// sort排序
var isAnagram = function (s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

// 简化版
var isAnagram1 = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};

// 哈希表计算
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};
