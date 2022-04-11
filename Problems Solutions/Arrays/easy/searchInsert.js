var searchInsert = function (nums, target) {
  let counter = 0;
  let answer;
  while (counter < nums.length) {
    if (nums[counter] === target) {
      return counter;
    }
    counter++;
  }
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};
const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 2));
