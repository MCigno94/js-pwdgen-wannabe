// Stampare una psw contenente nome + cognome + colore + n° a scelta

// Creare le variabili firstName - lastName - color e psw
const firstName = prompt("Type your name");
const lastName = prompt("Type your surname");
const color = prompt("Type your favorite color");
const psw = firstName + lastName + color + "27"

// Stampare il risultato in console
console.log(`${psw}`);

// Stampare il risultato in pagina
document.getElementById("psw_generator").innerHTML = psw;