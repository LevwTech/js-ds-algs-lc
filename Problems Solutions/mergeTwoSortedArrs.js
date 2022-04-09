function mergeTwoSortedArrs(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeTwoSortedArrs([0, 100, 200], [1, 2, 900]));
