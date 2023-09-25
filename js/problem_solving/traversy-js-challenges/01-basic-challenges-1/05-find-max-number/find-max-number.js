function findMaxNumber(arr) {
  let maxNumber = arr[0];
  const arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
  }

  return maxNumber;
}

module.exports = findMaxNumber;
