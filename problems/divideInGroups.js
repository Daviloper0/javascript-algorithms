//The challenge is to divide the array into the given amount of size (second argument).

function chunkArrayInGroups(arr, size) {
  let groupArray = [];
  for (let index = 0; index < arr.length; index += size) {
    groupArray.push(arr.slice(index, index + size));
  }
  console.log(groupArray)
  return groupArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);