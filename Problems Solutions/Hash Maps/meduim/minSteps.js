var minSteps = function (s, t) {
  const obj1 = {};
  const obj2 = {};
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      obj1[s[i]]++;
    } else {
      obj1[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (obj2[t[i]]) {
      obj2[t[i]]++;
    } else {
      obj2[t[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (obj2[t[i]] < obj1[t[i]]) continue;
    if (obj2[t[i]] !== obj1[t[i]] || obj2[t[i]] < obj1[t[i]]) {
      arr.push(t[i]);
      obj2[t[i]]--;
    }
  }

  return arr;
};
console.log(minSteps("leetcode", "practice")); // p r a i (not there) & c (obj1<obj2)
