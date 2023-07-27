function getRandomUppercase() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  }
  
  function getRandomLowercase() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    return lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  }
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 10).toString();
  }
  
  function getRandomSpecialChar() {
    const specialChars = '!@#$%^&*()_-+=<>?/[]{}|';
    return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }
  
  function generateRandomPassword(length) {
    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
      const randomCharType = Math.floor(Math.random() * 4); 
      // 0, 1, 2, or 3 for uppercase, lowercase, number, and special character
      switch (randomCharType) {
        case 0:
          passwordCharacters.push(getRandomUppercase());
          break;
        case 1:
          passwordCharacters.push(getRandomLowercase());
          break;
        case 2:
          passwordCharacters.push(getRandomNumber());
          break;
        case 3:
          passwordCharacters.push(getRandomSpecialChar());
          break;
      }
    }
    return passwordCharacters.join('');
  }
  
  // example output
  const passwordLength = 10;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  