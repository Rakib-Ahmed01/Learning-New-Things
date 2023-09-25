function calculator(num1, num2, operator) {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  if (operator === '/') return num1 / num2;

  return 'Invalid ';
}

module.exports = calculator;
