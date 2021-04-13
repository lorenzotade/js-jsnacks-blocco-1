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