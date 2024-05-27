function isBracketBalance(data) {
  const temp = [];
  const allowedBrackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let bracket of data) {
    if (Object.values(allowedBrackets).includes(bracket)) {
      temp.push(bracket);
    } else if (Object.keys(allowedBrackets).includes(bracket)) {
      if (
        temp.length === 0 ||
        temp[temp.length - 1] !== allowedBrackets[bracket]
      ) {
        return "NO";
      }
      temp.pop();
    }
  }

  return temp.length === 0 ? "YES" : "NO";
}

console.log(isBracketBalance("{ [ ( ] ) ] }"));
console.log(isBracketBalance("{ [ (  ) ] }"));
console.log(isBracketBalance("{ ( ( [ ] ) [ ] ) [ ] }"));