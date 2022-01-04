//This challenge was about recieving a string and trucating it if the string length was bigger than the max permited (num, second parameter) and return it with an ellipsis on the end. If it was smaller than the max permited, than it would just return it. I had solved this with the 'for' loop too, but this seems easier to read and to modify.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..."
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);