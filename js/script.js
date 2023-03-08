// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const kilometer = parseFloat(prompt('Inserisci la distanza in km da percorrere'));
const userAge = parseInt(prompt('Inserisci la tua età'));
console.log(kilometer, userAge);

// %bonus
if (isNaN(kilometer) || isNaN(userAge)) {
    console.log("Dati non corretti.");
    let message = (`Dati non corretti, si prega di ricarica la pagina. I chilometri e l\'età devono essere scritti in numero separando i decimali con un punto.`)
    document.getElementById('result').innerHTML = message;  
} else {
    // #il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let ticket = kilometer * 0.21;
    console.log(ticket);
    
    // #va applicato uno sconto del 20% per i minorenni
    // #va applicato uno sconto del 40% per gli over 65.
    let price = '';
    if (userAge < 18) {
        price = (ticket * 0.8).toFixed(2);
    } else if (userAge > 65) {
        price = (ticket * 0.6).toFixed(2);
    } else {
        price = (ticket * 1).toFixed(2);
    }
    console.log(price);
    
    // #L'output del prezzo finale va messo fuori in forma umana
    let message = (`Il prezzo del biglietto é di \u20AC${price}`)
    document.getElementById('result').innerHTML = message;  
}