/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequency = {};
  const solution = [];
  for (let num of nums) {
    if (frequency[num] === undefined) frequency[num] = 1;
    else frequency[num]++;
  }
  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxItem;
    for (let item in frequency) {
      if (frequency[item] > max) {
        max = frequency[item];
        maxItem = item;
      }
    }
    solution.push(Number(maxItem));
    frequency[maxItem] = 0;
  }

  return solution;
};
