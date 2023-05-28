const sum = require('../src/sum');

test('should add two numbers', () => {
  expect(sum(1, 1)).toEqual(2);
});
