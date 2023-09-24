const findTheMissingNumber = (nums) => {
  const arrLength = nums.length;

  if (arrLength === 0) return nums[0];

  const sumOfElements = nums.reduce((acc, curr) => acc + curr, 0);
  const sumOfElementsShouldBe = (arrLength * (arrLength + 1)) / 2;

  return sumOfElementsShouldBe - sumOfElements;
};

console.log(findTheMissingNumber([0, 1, 2, 3, 5]));
