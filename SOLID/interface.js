function Student() {
  this.sayHello = () => {
    console.log('I am a Student');
  }
}

function Worker() {
  this.sayHello = () => {
    console.log("I am a worker");
  }
}

function greet(person) {
  person.sayHello();
}

var bob = new Student();
var alice = new Worker();

greet(bob);
greet(alice);
