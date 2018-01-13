// function map(f, a) {
//   var result = []; // Create a new Array
//   var i; // Declare variable
//   for (i = 0; i != a.length; i++){
//     result[i] = f(a[i]);
//   }
//       return result;
// }
// var f = function(x) {
//    return x * x * x;
// }
// var numbers = [0,1, 2, 5,10];
// var cube = map(f,numbers);
// console.log(cube);
//
// function factorial(n) {
//   if ((n === 0) || (n === 1))
//     return 1;
//   else
//     return (n * factorial(n - 1));
// }
//
// var fac = factorial(3);
// console.log(fac);

var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

function multiply() {
        return num1* num2;
}
console.log(multiply()); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

console.log(getScore());
