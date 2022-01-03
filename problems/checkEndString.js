function confirmEnding(str, target) {
  return str.substring(str.length - target.length, str.length) == target;
  /* Other solution, using .endsWith()
  return str.endsWith(target)*/
}

confirmEnding("Bastian", "n");