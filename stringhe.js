let str = "michele francesco maresca";
let arr = str.split(" ");

for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
}

str = arr.join(" ");
console.log(str);
