//////// Project Euler Problem 1

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

  console.log(sum);

}

sumOfArray();

//////// Project Euler Problem 2
//Each new term in the Fibonacci sequence is generated by adding the 
//previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not 
//exceed four million, find the sum of the even-valued terms.

var arr = [];
var total = 0;

function evenFibonacciTotal() {

  for (var i = 0; i < 36; i++) {
    if (i === 0) {
    arr.push(i);
    } else if (i === 1) {
    arr.push(i);
    }  else if (arr[i] > 4000000) {
      break;
    } else if (i >= 2 ) {
      arr[i] = ( arr[i - 2] ) + ( arr[i - 1] );
      arr.push(arr[i]);
    }
  }
    console.log(arr);
}

evenFibonacciTotal();


// while (arr[i] < 4000000) {
//     text += "The number is " + i;
//     i++;
// }

for (var i = 0; i <= 4; i++) {
  
}



//////// Project Euler Problem 3
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem
//////// Project Euler Problem