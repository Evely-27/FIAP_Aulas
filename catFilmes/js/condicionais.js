let b 


if (b > 70) {
    console.log('O valor de b esta na metade maior da sequência ')
}else if ( b === 70) {
    console.log('O valor de b é iguail a 70')
} else {
    console.log('O valor de b esta  na metade menor da sequincia')
}

//! Diferenla entre == e ===

let a = 50
let d = 50 
let f = '50'

// console.log(`Esta comparação é : ${a == d}, ou seja ${a} = ${a} = ${d}!`) // ? estmmos fazendo comparação com dois iguais, comparando valores
// console.log(`Esta comparação é : ${a == f}, ou seja ${a} = ${a} = ${f}!`) // ? estmmos fazendo comparação com dois iguais, comparando valores


console.log(`Esta comparação é : ${a === d}, ou seja ${a} = ${a} = ${d}!`) // ? estmmos fazendo comparação com dois iguais, comparando valores e tipos
console.log(`Esta comparação é : ${a === f}, ou seja ${a} = ${a} !==(diferente) ${f}!`) // ? estmmos fazendo comparação com dois iguais, comparando valores e tipos

// mais exemplos

let e = 5
let  c = 8

function resultado(){
     somar(e,c)
}
// arrow function não pode ser chamada dentro de outra
function somar(e,c) {
    return e + c
}