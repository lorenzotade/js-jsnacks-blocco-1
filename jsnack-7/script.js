// creo una variabile numero che parta da 1
var numero = 1;

// con un ciclo while fino a che il quadrato del numero è inferiore a 1000 stampo il quadrato dei numeri incrementando di 1 ogni volta
while (Math.pow(numero, 2) < 1000) {
  var quadrato = Math.pow(numero, 2);
  console.log("Il quadrato di " + numero + " è uguale a: " + quadrato);
  console.log("====================")
  numero++;
}