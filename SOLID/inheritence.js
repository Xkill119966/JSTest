function Person(name) {
  this.fullName = name ;
  this.sayName = () => {
    console.log('Hello I am ' + this.fullName);
  };
}

function Student(name , major) {
  Person.call(this,name); //Call Person function, this keyword is Student this

  this.major = major;
  this.sayMajor = ()=> {
    console.log('I learn ' + this.major);
  }
}

var foo = new Student('Thurein', 'JavaScript');
foo.sayName();
foo.sayMajor();
