function Order(items) {
  this.items = items;
  this.amount = function () {
    var total = 0;
    for (var item in items) {
      total += item.value;
    }
      return total;
  }
}
//Wrong Open/Close Principle
// function Order(items) {
//   this.items = items;
//   this.amount = function (currency) {
//     var total = 0;
//     for (var item in items) {
//       total += item.value;
//     }
//     if (currency == 'MMK') {
//       return total*getExchangeRate();
//     }else {
//       return total;
//     }
//   }
// }

function Order(items) {
  this.items = items;
  this.amount = function () {
    var total = 0;
    for (var item in items) {
      total += item.value;
    }
    return total;
  }

  this.kaytAmount = function () {
    var total = this.amount();
    return total * getExchangeRate();
  }



}
