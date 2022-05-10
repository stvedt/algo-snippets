const naiveStringSearch = (string, subString) => {
  const firstLetterSub = subString[0];
  let matches = 0;

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    let fullMatch = false;
    for (let j = 0; j < subString.length; j++) {
      if (string[i + j] !== subString[j]) break;
      if (j === subString.length - 1) matches++;
    }
  }

  return matches;
};

console.log(naiveStringSearch("wowowowomgwowowomgwoww", "wow"));
