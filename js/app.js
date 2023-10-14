let a = 373
let ohiri = a % 10
let orta = Math.floor(a % 100 / 10)
let boshi = Math.floor(a / 100)
let teskari = ohiri * 100 + orta * 10 + boshi
console.log(ohiri, orta, boshi, teskari)