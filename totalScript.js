/********** JSNACK 2 ***********/

// con un prompt prendo due parole dall'utente
var firstWord = prompt("Inserisci la prima parola:");
var secondWord = prompt("Inserisci la seconda parola:");

// controllo lunghezza parole e stampo a video
if (firstWord.length < secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
  console.log(secondWord);
  console.log(firstWord);
} else {
  alert("le parole sono guali") //avevo messo a stampa le parole; ora corretto con alert.
}

/********** JSNACK 3 ***********/

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

/********** JSNACK 4 ***********/

// creo un array contenente i nomi degli invitati
var guests = ["Lorenzo", "Mario", "Massimo", "Claudia", "Giuditta", "Augusto", "Maria", "Isabella", "Donata", "Leopoldo", "Giuseppe", "Paride", "Alessandro", "Corrado", "Luca"];

// chiedo all'utente di inserire il proprio nome con un prompt
var user = prompt("Inserisci il tuo nome");

// inizializzo una flag che mi servirà a controllare se la persona è invitata o meno
var invited = false;

/* con un ciclo for della lunghezza del numero degli invitati modifico la flag a true nel caso il nome inserito sia presente */
for (var i = 0; i < guests.length; i++) {
  var guest = guests[i];
  if (user === guest) {
    invited = true;
    break;
  }
}
// con un condizionale if controllo se la flag è vera o no e stampo a video un messaggio appropriato
if (invited) {
  alert("Prego entri signor*");
} else {
  alert("Vattene, straccion*!");
}

/********** JSNACK 5 ***********/

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

/********** JSNACK 6 ***********/

// chiedo all'utente di inserire un numero
var numero = parseInt(prompt("Inserisci un numero:"));
// inizializzo una variabile somma
var somma = 0;

// con un ciclo for da 1 al numero utente motiplico al cubo ogni numero e lo sommo ogni volta
for (i = 1; i <= numero; i++) {
  var cubo = Math.pow(i, 3);
  // stampo i cubi
  console.log(cubo);
  somma += cubo;
}

// stampo la somma totale
console.log("La somma dei cubi è: " + somma);

/********** JSNACK 7 ***********/

// creo una variabile numero che parta da 1
var numero = 1;

// con un ciclo while fino a che il quadrato del numero è inferiore a 1000 stampo il quadrato dei numeri incrementando di 1 ogni volta
while (Math.pow(numero, 2) < 1000) {
  var quadrato = Math.pow(numero, 2);
  console.log("Il quadrato di " + numero + " è uguale a: " + quadrato);
  console.log("====================")
  numero++;
}

/********** JSNACK 8 ***********/

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

/********** JSNACK 9 ***********/

// inizializzo un array e lo popolo con i primi 10 numeri
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// inizializzo una variabile somma e una variabile media
var somma = 0;
var media = 0;

// con un ciclo for sommo i numeri presenti all'interno dell'array
for (i = 0; i < numeri.length; i++) {
  var n = numeri[i];
  somma += n;
}
// stampo a video la somma dei numeri
console.log("La somma dei numeri è: " + somma);

// salvo all'interno della variabile la media dei numeri presenti nell'array 
media = somma / numeri.length;

// stampo a video la media
console.log("La media è: " + media);