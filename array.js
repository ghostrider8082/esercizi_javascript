//programma che inverte l'ordine degli elementi dell'array a, dall'ultimo al primo.

let a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let tmp = [];
let lung = a.length;

for (let i = 0; i < lung; i++) {
  tmp.push(a.pop());
}

for (let i = 0; i < lung; i++) {
  a.push(tmp.shift());
}

console.log(a);
