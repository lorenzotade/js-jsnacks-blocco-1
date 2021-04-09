// inizializzo un array vuoto e una variabile somma uguale a 0
var numbers = [];
var sum = 0;

// con un ciclo for riempio l'array con i numeri inseriti dall'utente e li sommo tra loro
for (var i = 0; i < 10; i++) {
  var input = parseInt(prompt("Inserisci un numero"));
  numbers.push(input);
  sum += numbers[i];
}

console.log(sum);