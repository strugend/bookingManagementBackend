function uniqueValues(arr1, arr2) {
    const repeating = [];
    const nonRepeating = [];
    const allValues = arr1.concat(arr2);
  
    for (let i = 0; i < allValues.length; i++) {
      const currentValue = allValues[i];
      if (repeating.includes(currentValue)) {
        continue;
      }
      if (nonRepeating.includes(currentValue)) {
        nonRepeating.splice(nonRepeating.indexOf(currentValue), 1);
        repeating.push(currentValue);
      } else {
        nonRepeating.push(currentValue);
      }
    }
  
    return nonRepeating;
  }

  
module.exports = uniqueValues;