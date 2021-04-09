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
