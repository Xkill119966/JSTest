// function Person(name) {
//   this.name = name ;
//   this.sayname = ()=> {
//     console.log("Hello " + this.name);
//   }
// }
//
// var thurein = new Person('Thurein');
// thurein.sayname();

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);


var Animal = {
  type : 'Invertebrates',
  displayType:function () {
    console.log(this.type);
  }
};

var animal = Object.create(Animal);
animal.displayType();

var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();


var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a);
