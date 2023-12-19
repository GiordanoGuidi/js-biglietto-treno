console.log('JS OK')


// Chiediamo il numero di chilometri che l'utente vuole percorrere//
const kilometersTravelled= parseInt(prompt('Quanti chilometri deve percorrere?', '20'));
console.log('Chilometri percorsi', kilometersTravelled)

// Chiediamo l'età all'utente//
const userAge= parseInt(prompt("Qual'è l'età del passeggero?","35"));
console.log( 'Età utente', userAge)

// Calcoliamo il prezzo del biglietto//
const ticketPrice= 0.21 * kilometersTravelled;
console.log('Prezzo biglietto', ticketPrice)

// Calcoliamo il prezzo del biglietto per i minorenni//
const ticketPriceMinors = ticketPrice - (ticketPrice / 100 * 20);
console.log('Prezzo biglietto minorenni', ticketPriceMinors.toFixed(2))

// Calcoliamo il prezzo del biglietto per gli over 65//
const ticketPriceOver65= ticketPrice - (ticketPrice / 100 * 40);
console.log('Prezzo biglietto over65', ticketPriceOver65)

// Prendiamo l'elemento nell'html//
document.getElementById=('paragraph')

// Costruisco il messaggio passeggeri compresi tra i 18 e i 65 anni di età//
const message=('Il prezzo del biglietto è : ')
paragraph.innerText= `${message} ${ticketPrice.toFixed(2)}€`
// Messaggio per passeggeri minorenni//
if(userAge < 18){
    paragraph.innerText= `${message} ${ticketPriceMinors.toFixed(2)}€`
    console.log(paragraph)
}
// Messaggio per passeggeri over 65//
else if(userAge > 65){
    paragraph.innerText= `${message} ${ticketPriceOver65.toFixed(2)}€`
    console.log(paragraph)
}






