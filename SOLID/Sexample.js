function Student(name, major,rollCall) {
  this.name = name ;
  this.major = major;
  this.rollCall = rollCall;
  this.singleRollCall = ()=> {this.rollCall++;};
//Ma tone thin
  // this.displayInfo = function () {
  //   return "<b>" + this.name + "</b>" + ":<i>"+ this.major + "</i>";
  // }
}

function ViewFormat() {
  this.displayInfo = (name)=> {
      return "<b>" + this.name + "</b>" + ":<i>"+ this.major + "</i>";
  }
}
