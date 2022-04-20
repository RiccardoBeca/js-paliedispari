/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input


1. chiedo una parola all'utente con un prompt
2. creo funzione 

*/


// chiedo la parola
const userWord = prompt("Please insert a word");

function isPalindrome(string) {
 
  const wordLength = string.length - 1;
 // scandaglio meta' stringa per controllare il primo elemento  con l'ultimo incrementando il valore di [i]
  for (let i = 0; i < wordLength / 2; i++) {

    if (string[i] !== string[wordLength - i] ) {
      return document.getElementById("output-text").innerHTML = "Questa parola non e' palindroma";
    }

    return document.getElementById("output-text").innerHTML = "Questa parola  e' palindroma";
  } 

}
//  chiamo funzione inserendo userWord che sara' la stringa inserita dall'utente
isPalindrome(userWord);

