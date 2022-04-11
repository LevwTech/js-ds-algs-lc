var removeElement = function (nums, val) {
  var i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      ++i;
    }
  }
};
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(nums, 2);
console.log(nums);
