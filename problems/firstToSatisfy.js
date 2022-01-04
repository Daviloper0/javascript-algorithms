//This challenge is about returning the first array element that satisfies the function given as second argument and returns it. If there is no element that satisfies the function, it returns undefined
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i]) == true) {
      return (arr[i])
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);