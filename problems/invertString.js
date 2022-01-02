function reverseString(str) {
    let invertedString = [];
    for (let i = 0; i < str.length; i++) {
      invertedString.unshift(str[i])
    }
    return invertedString.join('');
  }
  
  reverseString("hello");