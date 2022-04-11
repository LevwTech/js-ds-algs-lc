var maxArea = function (height) {
  let [i1, i2] = [0, height.length - 1];
  let max_area = 0;
  let area;
  while (i1 < i2) {
    const min = height[i1] < height[i2] ? i1 : i2;
    area = height[min] * Math.abs(i1 - i2);
    if (max_area < area) {
      max_area = area;
    }
    if (min == i1) {
      i1++;
    } else {
      i2--;
    }
  }
  return max_area;
};
