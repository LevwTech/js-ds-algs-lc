var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const obj = {};

  if (words.length !== pattern.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (obj[pattern[i]]) {
      if (obj[pattern[i]] !== words[i]) {
        return false;
      }
    } else {
      obj[pattern[i]] = words[i];
    }
  }
  const arr = [];
  const set = new Set(pattern.split(""));
  for (const item of set) {
    if (!arr.includes(obj[item])) {
      arr.push(obj[item]);
    } else {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog dog dog dog")); // false
