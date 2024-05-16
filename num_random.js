
const minimo = +prompt("Inserisci il range minimo (incluso)");
const massimo = +prompt("Inserisci il range massimo(escluso)");

const diff = Math.abs(massimo - minimo);

let casuale = minimo + Math.random() * diff;
casuale = Math.floor(casuale);

console.log(casuale);
