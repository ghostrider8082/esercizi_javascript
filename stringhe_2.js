let str = "Maestro %. Corso JS su Udemy";
let sostituisci = "JAVASCRIPT";

let pos = str.indexOf("%");
str = str.slice(str[0], pos) + sostituisci + str.slice(pos + 1);

console.log(str);