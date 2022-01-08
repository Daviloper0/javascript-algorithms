//The challenge is to recieve 2 arrays and a Index. The function have to insert the first array on the given index of the second.

function frankenSplice(arr1, arr2, n) {
  let resultantArray = [...arr2];
  resultantArray.splice(n, 0, ...arr1);
  return resultantArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);