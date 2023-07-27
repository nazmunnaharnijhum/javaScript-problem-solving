function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Invalid operator';
    }
  }
  
  // example output
  const num1 = 10;
  const operator = '+';
  const num2 = 5;
  const result = calculator(num1, operator, num2);
  console.log(result);
  