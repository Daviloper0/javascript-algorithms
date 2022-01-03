//The challenge is to recieve a string and then invert it. So this is what the function does;
function reverseString(str) {
    let invertedString = [];
    for (let i = 0; i < str.length; i++) {
      invertedString.unshift(str[i])
    }
    return invertedString.join('');
  }
  
  reverseString("hello");