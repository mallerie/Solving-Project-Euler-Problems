// Project Euler Problem 1

var arr = [];
var total = 0;

function sumOfArray() {

  for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  var sum = arr.reduce(function(a, b) {
    return a + b;
  });

}

sumOfArray();


// Project Euler Problem 2
// Project Euler Problem 3
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem
// Project Euler Problem