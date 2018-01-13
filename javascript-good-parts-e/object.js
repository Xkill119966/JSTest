var stooge = {
"first-name": "Jerome",
"last-name": "Howard"
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};
stooge["middle-name"] = "Lecter";
flight.equipment = {
  model: 'Boeing 777'
};
var x = stooge;
x.nickname = 'Curly';
// var nick = stooge.nickname;
flight.status = 'overdue';
// console.log(nick);
delete stooge["first-name"];
console.log(stooge);
console.log(flight);
