//This challenge was about repeating a string without using the .repeat() method. It recieves a string and a number (of times that the string will be repeated).

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  function repeater(string, times) {
    var repeatedString = "";
    for (let i = 0; i < times; i++) {
      repeatedString += string;
    }
    return repeatedString;
  }
  
  return repeater(str, num);
}

repeatStringNumTimes("abc", 3);