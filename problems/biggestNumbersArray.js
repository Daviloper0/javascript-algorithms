//In this challenge the function recieves an multidimensional array and has to return (in other array) the largest number from each of the 'child' arrays.

function largestOfFour(arr) {
  let largestNumberArray = [];
  for (let i = 0; i < arr.length; i++) {
      largestNumberArray.push(largestFromChild(arr[i]))
  }

  function largestFromChild(childArray) {
     let largestChildNumber = childArray[0];
     for (let i = 0; i < childArray.length; i++) {
       if (childArray[i] > largestChildNumber) {
         largestChildNumber = childArray[i];
       }
     }
     return largestChildNumber;
  }
  return largestNumberArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);