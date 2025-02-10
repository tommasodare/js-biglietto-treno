/* 

Il programma dovrà chiedere all'utente 
il numero di chilometri che vuole percorrere 
e l'età del passeggero.

Sulla base di queste informazioni 
dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:

Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori 
in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.



*/

const userKm = Number(prompt("Scegliere il numero di chilometri da percorrere"))
console.log(userKm);

const age = Number(prompt("Elencare la propria età"))
console.log(age);

const price = (userKm * 0.21);
console.log(price);

const discount18 = (price - 0.2*price)
const discount65 = (price - 0.4*price)



if (age <= 18) {

    console.log(discount18.toFixed(2));
    
} else if (age >= 65) {

    console.log(discount65.toFixed(2))

} else {

    console.log(price.toFixed(2))
}
