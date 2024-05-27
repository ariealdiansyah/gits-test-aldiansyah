function highestPalindrome(s, k) {
    function helper(s, k, left, right) {
      if (left >= right) {
        return s;
      }
      if (s[left] === s[right]) {
        return helper(s, k, left + 1, right - 1);
      }
      if (k > 0) {
        let s1 = s.slice(0, left) + s[right] + s.slice(left + 1, right) + s[right] + s.slice(right + 1);
        let s2 = s.slice(0, left) + s[left] + s.slice(left + 1, right) + s[left] + s.slice(right + 1);
  
        let result1 = helper(s1, k - 1, left + 1, right - 1);
        let result2 = helper(s2, k - 1, left + 1, right - 1);
        return result1 > result2 ? result1 : result2;
      } else {
        return "-1";
      }
    }
    function isPalindrome(str, left, right) {
      if (left >= right) {
        return true;
      }
      if (str[left] !== str[right]) {
        return false;
      }
      return isPalindrome(str, left + 1, right - 1);
    }
    let result = helper(s, k, 0, s.length - 1);
    if (result === "-1" || !isPalindrome(result, 0, result.length - 1)) {
      return "-1";
    }
      
  
    return result;
  }
console.log(highestPalindrome("3943", 1)); 