// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// var bombe = 3;
// var tentativi = 10;

// funzione che genera un numero casuale tra 1 e 100
function numeroRandom() { //lasciamo le parentesi vuote perche la funzione non accetta paramentri in entrata
  var numeroACaso = Math.floor(Math.random() * 100) + 1;
  return numeroACaso;
}

//funzione che controlla se in un array esiste un determinato numero
// immagino l'array come una fila di numeri e il (num) è il numero che andiamo a pescare
function controllo(array, num) {
  for (var i = 0; i < array.length; i++) {

    if (array[i] == num){
       return true;
    }
  }
  return false;
}
//creo variabile array che contiene i numeri bomba
var arrayBombe = []
//per richiamarla basta digitare numeroRandom

// avvio un ciclo per trovare i 16 numeri delle bombe
for (var i = 0; i < 16; i++) {

  // applicando la funzione numeroRandom trovo il mio numeroCasuale
  var numeroCasuale = numeroRandom();

  // applicando la funzione controllo verifico che non ci sono doppioni nei miei numeri/bomba
  var esitoControllo = controllo(arrayBombe, numeroCasuale);
  //usufruisco del ciclo while per far si che quando si tova un numero doppione genero un altro numero e verifico
  //se si trova di nuovo nell'array
    while (esitoControllo == true) {
      numeroCasuale = numeroRandom();
      esitoControllo = controllo(arrayBombe, numeroCasuale);
    }
      // inserisco il numeroCasuale all'interno dell'arrayBombe
     arrayBombe.push(numeroCasuale);

}
console.log(arrayBombe);

var i = 0;
var fineGioco = false;
var arrayUtente = [];
while ((i < 84) && (fineGioco == false)) { //continua a chiedermi di inserire un numero fino a quando me lo ha chiesto 84 volte oppure fin quando sbaglio
  //faccio inserire all'utente 1 numero da 1 a 100;
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  //richiamo la funzione ""controllo" per controllare se l'utente ha messo un numero uguale a quello delle bombe
  //oppure no
   if (controllo(arrayBombe,numeroUtente) == true) {
     alert("Hai perso, sei arrivato al livello: " + i);
     fineGioco = true;
   } else if (numeroUtente < 1 || numeroUtente > 100) {
     alert ("Hai inserito un numero che non è compreso tra 1 e 100");
     --i;
   } else if (true) {

   } else {
     alert("bravo...continua");
   }
   i++;
}
