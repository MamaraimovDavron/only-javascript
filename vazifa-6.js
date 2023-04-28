let raqam = 1234;

let r1 = Math.floor(raqam / 1000);
let r2 = Math.floor((raqam % 1000) / 100);
let r3 = Math.floor((raqam % 100) / 10);
let r4 = Math.floor(raqam % 10);

console.log("Berilgan son " + raqam + " edi.Va " + r4 + r3 + r2 + r1 + " ga o`zgardi!");