const getWeights = (str) => {
  const charSet = new Set();

  let i = 0;
  while (i < str.length) {
    let char = str[i];
    let weight = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    let count = 1;
    charSet.add(weight);
    while (i + 1 < str.length && str[i + 1] === char) {
      count++;
      charSet.add(weight * count);
      i++;
    }
    i++;
  }

  return charSet;
}

const checkString = (str, queries) => {
  const weightSet = getWeights(str);
  return queries.map((query) => (weightSet.has(query) ? "Yes" : "No"));
}

const str = "abbcccd";
const queries = [1, 3, 9, 8];

const result = checkString(str, queries);
console.log(result);
