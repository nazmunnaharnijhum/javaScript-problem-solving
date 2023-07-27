function findMostFrequentElement(arr) {
    // Create an object to store the occurrences of each element
    const elementCounts = {};
  
    // Iterate through the array and count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    }
  
    // Find the most frequent element and its count
    let mostFrequentElement;
    let maxCount = 0;
    for (const element in elementCounts) {
      if (elementCounts[element] > maxCount) {
        mostFrequentElement = element;
        maxCount = elementCounts[element];
      }
    }
  
    return parseInt(mostFrequentElement);
  }
  
  // example output
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const output = findMostFrequentElement(inputArray);
  console.log(output);
  