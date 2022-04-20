/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input

*/


const pariDispari = prompt("Pari o Dispari?")




if (pariDispari !== ("Pari" || "Dispari")) {
  
  document.getElementById("output-text").innerHTML =  "Perfavore scegli tra Pari o Dispari";
  
}else {
  
  const chooseNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
  
}

