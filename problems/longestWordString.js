function findLongestWordLength(str) {
    let stringArray = str.split(" ")
    let longestStringLength = 0;
    for (let index = 0; index < stringArray.length; index++) {
      if (stringArray[index].length > longestStringLength) {
        longestStringLength = stringArray[index].length;
      }
    }
    return longestStringLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");