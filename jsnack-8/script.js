// chiedo all'utente di inserire un numero di quattro cifre e lo salvo in una variabile
var numero = parseInt(prompt("Inserisci un numero di quattro cifre:"))
// inizializzo una variabile somma
var somma = 0;

/* con un ciclo while che gira fino a che il numero è diverso da zero, a "somma" sommo se stesso più il resto della divisione del numero per 10, cioè quello che rimane dopo la virgola (l'ultima cifra di esso). A questo punto divido il numero per 10 arrotondandolo per difetto quindi togliendo ad ogni giro il decimale che ho utilizzato in precedenza. Quando utilizzo l'ultima cifra il numero è uguale a 0 per cui la condizione diventa falsa ed il ciclo while si ferma */
while (numero) {
  somma += numero % 10;
  numero = Math.floor(numero / 10);
}

// stampo a video la somma delle cifre
console.log(somma);