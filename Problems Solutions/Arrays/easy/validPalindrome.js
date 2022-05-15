// 1 liner

var isPalindrome = function (s) {
  return s.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
    s
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
    ? true
    : false;
};
