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