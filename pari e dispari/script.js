/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input

*/


let controlFlag = false;
let pariDispari;

while (!controlFlag){
  
  pariDispari = prompt("Pari o Dispari?")

  if (pariDispari !== ("Pari" || "Dispari")) {
    alert ("Perfavore scegli tra Pari o Dispari");
    // document.getElementById("output-text").innerHTML =  "Perfavore scegli tra Pari o Dispari";
    
  }else{
    controlFlag = true;
    
  }
}

let secondControlFlag = false;

let chooseNumber;

while (!secondControlFlag) {
  
  chooseNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

  if (chooseNumber < 1 || chooseNumber > 5) {
    alert("Ti ho detto di inserire un numero da 1 a 5!!");
  }else{
    secondControlFlag = true;
  }

}


function randomNumber(){
  
  return Math.floor(Math.random() * 5);
}
const computerNumber = randomNumber();

console.log(computerNumber);



const sum = chooseNumber + computerNumber;

console.log(sum);
