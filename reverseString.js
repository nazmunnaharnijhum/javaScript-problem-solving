function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
    return reversedString;
  }
  
  // example output
  const input = "hello world";
  const output = reverseString(input);
  console.log(output);
  