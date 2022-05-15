var groupAnagrams = function (strs) {
  const hash = {};
  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (hash[sortedWord] === undefined) {
      hash[sortedWord] = [word];
    } else {
      hash[sortedWord].push(word);
    }
  }
  return Object.values(hash);
};
// Loop over strs sort the word and check if it exists in hashmap
// if it doesnt add and set to array with word item, if it does push word
// Object.values(hash) takes hashmap and returns array with its values
