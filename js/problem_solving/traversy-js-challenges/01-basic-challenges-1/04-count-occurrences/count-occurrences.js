function countOccurrences(string, letterToMatch) {
  let matchCount = 0;
  const stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    if (string[i] === letterToMatch) matchCount++;
  }

  return matchCount;
}

module.exports = countOccurrences;
