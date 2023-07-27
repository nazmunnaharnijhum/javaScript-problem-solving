function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  // example output
  const inputArray = [2, -5, 10, -3, 7];
  const output = sumOfPositiveNumbers(inputArray);
  console.log(output); 
  