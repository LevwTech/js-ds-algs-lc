var wateringPlants = function (plants, capacity) {
  const initialCapacity = capacity;
  let steps = 0;
  for (let i = 0; i < plants.length; i++) {
    if (capacity >= plants[i] || plants[i] === "watered") {
      if (plants[i] === "watered") {
        steps++;
        continue;
      }
      capacity = capacity - plants[i];
      plants[i] = "watered";
      steps++;
    } else {
      capacity = initialCapacity;
      steps = steps + i + 1;
      i = 0;
    }
  }
  return steps;
};
console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4));
