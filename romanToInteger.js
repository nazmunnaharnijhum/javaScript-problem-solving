function romanToInt(romanNumeral) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbol = romanNumeral[i];
      const nextSymbol = romanNumeral[i + 1];
  
      if (romanMap[currentSymbol] < romanMap[nextSymbol]) {
        result -= romanMap[currentSymbol];
      } else {
        result += romanMap[currentSymbol];
      }
    }
  
    return result;
  }
  
  // example output
  const romanNumeral1 = "IX";
  console.log(romanToInt(romanNumeral1)); // Output: 9
  
  const romanNumeral2 = "XXI";
  console.log(romanToInt(romanNumeral2)); // Output: 21
  