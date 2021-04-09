// creo un array vuoto
var numbers = [];

/* attraverso un ciclo for che si ripete 6 volte chiedo all'utente di inserire un numero; con un condizionale if controllo istantaneamente se il numero è dispari e nel caso lo pusho nell'array */
for (var i = 0; i < 6; i++) {
  num = parseInt(prompt("Inserisci un numero"));
  if (num%2) {
    numbers.push(num);
  }
}

console.log(numbers);