var findLucky = function (arr) {
  const ans = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj[arr[i]]) ans.push(arr[i]);
  }
  if (ans.length === 0) return -1;
  const max = Math.max(...ans);
  return max;
};
console.log(findLucky([2, 2, 3, 4]));
