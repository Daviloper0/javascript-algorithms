//The challenge is about verifying if a string ends with the target's sequence. It isn't allowed to use the .endsWith() method. But there is also the resolution using that method.  

function confirmEnding(str, target) {
  return str.substring(str.length - target.length, str.length) == target;
  /* Other solution, using .endsWith()
  return str.endsWith(target)*/
}

confirmEnding("Bastian", "n");