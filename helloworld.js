// var sales = 'Toyota';
//
// function carTypes(name) {
//   if (name === 'Honda') {
//     return name;
//   }else {
//     return "We don't sell" + name + ".";
//   }
//
// }
//
// var car = {
//   myCar: 'Saturn',
//   getCar: carTypes('Honda'),
//   special: sales
//  };
// console.log(car.myCar);
// console.log(car.getCar)
// console.log(car.special);
//
// var car1 = {
//   manyCars: {
//       a: 'Saab',
//       b: 'Jeep'
//     },
//       7: 'Mazda'
//     };
//
// console.log(car1.manyCars.a); // Jeep
// console.log(car1[7]);
// console.log("John's cat".length)
//
// var x = 1;
// {
//   let x = 2;
// }
// console.log(x);
//
// function f() {
//   try {
//     console.log(0);
//     throw 'bogus';
//   } catch(e) {
//     console.log(1);
//     return true; // this return statement is suspended
//                  // until finally block has completed
//     console.log(2); // not reachable
//   } finally {
//     console.log(3);
//     return false; // overwrites the previous "return"
//     console.log(4); // not reachable
//   }
//   // "return false" is executed now
//   console.log(5); // not reachable
// }
// f();
//
//
// let myFirstPromise = new Promise((resolve, reject) => {
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML5 API.
//   setTimeout(function(){
//     resolve("Success!"); // Yay! Everything went well!
//   }, 250);
// });
//
// myFirstPromise.then((successMessage,haha) => {
//   // successMessage is whatever we passed in the resolve(...) function above.
//   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//   console.log("Yay! " + successMessage);
//   console.log("fuck" + haha);
// });

// let myFirstPromise = new Promise((resolve, reject)=>{
//   setTimeout(function () {
//     resolve('Thurein');
//   },250);
// });
// myFirstPromise.then((successMessage, haha)=>{
//   console.log("Yay! " + successMessage);
//   console.log("fuck " + haha);
// });
//
// dosomething().then( result=>dosomethingelse(result)
// )

// new Promise((resolve, reject)=>{
//   console.log('Initial');
//   resolve();
// }).then( ()=> {
//   throw new Error('something failed');
//   console.log('Do this');
//
// }).catch( ()=> {
//   console.log('Do this');
// }).then( ()=> {
//   console.log('Do this whatever happened before');
// })
//
// var x = 0;
// var z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ' + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ' + z);
//     z += 1;
//     if (z === 5 && x === 5) {
//       break labelCancelLoops;
//     } else if (z === 5) {
//       break;
//     }
//   }
// }

// var i = 0;
// var j = 10;
// checkiandj:
//   while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkj:
//       while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if ((j % 2) == 0) {
//           continue checkj;
//         }
//         console.log(j + ' is odd.');
//       }
//       console.log('i = ' + i);
//       console.log('j = ' + j);
//   }

var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(5));
console.log(1*2*3*4*5);
