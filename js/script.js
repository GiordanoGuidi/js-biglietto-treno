console.log('JS OK')

//Chiediamo il numero di chilometri che l'utente vuole percorrere//
const kilometersTravelled= parseInt(prompt('Quanti chilometri deve percorrere?', '20'));
console.log(kilometersTravelled)

//Chiediamo l'età all'utente//
const userAge= prompt("Qual'è l'età del passeggero?","35");
console.log(userAge)

// Calcoliamo il prezzo del biglietto//
const ticketPrice= 0.21 * kilometersTravelled;
console.log(ticketPrice)