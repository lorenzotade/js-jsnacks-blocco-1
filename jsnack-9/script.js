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