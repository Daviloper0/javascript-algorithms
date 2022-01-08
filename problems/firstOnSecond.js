//This challenge is about checking if the first string contains all characters of the second.

function mutation(arr) {
  let firstItemArray = [...arr[0].toLowerCase()]
  let secondItemArray = [...arr[1].toLowerCase()]

  for (let index = 0; index < secondItemArray.length; index++) {
    if (firstItemArray.indexOf(secondItemArray[index]) == -1) {
      return false;
    }
  }
  return true;;
  
}
mutation(["hello", "hey"]);