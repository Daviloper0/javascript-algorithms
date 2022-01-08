//In this challenge the function recieves an array and a number, and it is supposed to give the index that after sorting, it would belong to, so the array continue to be sorted. For example if the array was [40, 60] and the number (second argument) the result will be 1, as if the number was inserted in that array, it should be on the second position (Index 1).

function getIndexToIns(arr, num) {
  arr.sort(function(a,b){return a - b});
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= num) {
      return index;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);