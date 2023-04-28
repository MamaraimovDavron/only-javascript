let raqam = 1234;

let r1 = Math.floor(raqam / 1000);
let r2 = Math.floor((raqam % 1000) / 100);
let r3 = Math.floor((raqam % 100) / 10);
let r4 = Math.floor(raqam % 10);

let res = r1 + r2 + r3 + r4;

console.log("Berilgan sonning " + raqam + " raqamlari yig`indisi " + res + " ga teng!");