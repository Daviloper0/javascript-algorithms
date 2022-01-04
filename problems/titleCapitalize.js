//This challengem the function recieves a strings and title capitalize all of it. So, a sentence that were like "A question isn't a doubt" will be transformed in "A Question Isn't A Doubt".

function titleCase(str) {
  str = str.toLowerCase().split(" ")
  for(let index = 0; index < str.length; index++) {
    str[index] = str[index][0].toUpperCase() + str[index].slice(1);
  }
  console.log(str.join(' '))
  return str.join(' ');
}

titleCase("I'm a little tea pot");