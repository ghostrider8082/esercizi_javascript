let frase = "Ciao Michele come stai? Come va la vita in quel di Milano?";

frase = frase.length > 16 ? frase.substring(0,16).concat("...") : frase;

console.log(frase);
