// creo un array contenente i nomi degli invitati
var guests = ["Lorenzo", "Mario", "Massimo", "Claudia", "Giuditta", "Augusto", "Maria", "Isabella", "Donata", "Leopoldo", "Giuseppe", "Paride", "Alessandro", "Corrado", "Luca"];

// chiedo all'utente di inserire il proprio nome con un prompt
var user = prompt("Inserisci il tuo nome");

// inizializzo una flag che mi servirà a controllare se la persona è invitata o meno
var invited = false;

// con un ciclo for della lunghezza del numero degli invitati modifico la flag a true nel caso il nome inserito sia presente
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