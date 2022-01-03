//This challenge is to create a function that recieves a number and returns the factorial of it. It considers there are no negative numbers. So if it recieves 5, it will return 120 (5*4*3*2*1).

function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  factorialize(5);