// calcolo il prezzo del biglietto
// quanti anni hai
const km = parseInt(prompt("quanti km devi percorrere"));

console.log(km);

//quanti km devi percorrere
const eta = parseInt(prompt("quanti hanni hai?"));
console.log(eta);


//calcolo prezzo biglietto
//prezzo standard
const prezzoStandard = 0.21;
let prezzo;

prezzo = (km * prezzoStandard);
console.log(prezzo);

// condizione prezzo variabile a seconda dell'eta
if( eta < 18 ) {
    const prezzoMinorenne = prezzoStandard * 80 / 100;
    prezzo = km * prezzoMinorenne;
    console.log(prezzo);

} else if( eta > 65 ) {

    const prezzoOver = prezzoStandard * 60 / 100;
    prezzo = km * prezzoOver;
    console.log(prezzo);

} 


//dichiarazione del prezzo
document.getElementById("prezzo_calcolato").innerHTML = " il costo del tuo biglietto è " + prezzo.toFixed(2); + "euro";






