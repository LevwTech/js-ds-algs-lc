function reverseString(word) {
  const arr = word.split("");
  const length = arr.length;
  const arr2 = [];
  for (let i = 0; i < length; i++) {
    arr2.push(arr.pop());
  }
  return arr2.join("");
}
console.log(reverseString("levw")); //wvel
