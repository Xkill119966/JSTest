function Person(name) {
  this.fullname = name;
  this.sayName = () => {
    sayHello(this.fullname);
  }

  function sayHello(name) {
    console.log("Hello,I am  " + name );
  }
}

var thurein = new Person('Thurein');
thurein.sayName();
thurein.sayHello(); // Type Error sayHello is not a function
