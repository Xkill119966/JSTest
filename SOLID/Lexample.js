function Rectangle() {
  this.setWidth = function (width) {
    this.width = width;
  }
  this.setHeight = function (height) {
    this.height = height;
  }
  this.area = function () {
    return this.width * this.height;
  }
}

function Square() {
  Rectangle.call(this);
  this.setWidth = function (width) {
    this.width = width;
    this.height = height;
  }
  this.setHeight = this.setWidth;
}
