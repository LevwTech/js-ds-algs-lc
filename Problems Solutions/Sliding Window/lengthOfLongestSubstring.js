const lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let cur = [];
  for (let i = 0; i < s.length; i++) {
    if (cur.includes(s[i])) {
      maxLength = Math.max(maxLength, cur.length);
      while (cur.includes(s[i])) {
        cur.shift();
      }
    }
    cur.push(s[i]);
  }
  return Math.max(maxLength, cur.length);
};
