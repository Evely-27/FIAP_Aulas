// math.random osrteira numeros de 1 ate 100(acho)
// math.floor arredonda o numero para inteiro


// variavel global
let a = Math.floor(Math.random() * 1000)
function minhaprimeiraFuncao(){
    let b = Math.floor(Math.random() * 1000)
    // return a + b
    return `${a} + ${b} = ${a + b}` 
}
console.log(minhaprimeiraFuncao())


// let s = Math.floor(Math.random() * 1000)
// function segundaFuncao(){
//     let c = Math.floor(Math.random() * 1000)
//     if(s > c ) {
//         // shift + ( = coloca entre parenteses

//         // return `${s} - ${c} = ${s + c}` 
//         // não precisa obrigatoriamente ter um retorno
//         console.log(`${s} - ${c} = ${s + c}`)
//     } else {
//         // return `${s} + ${c} = ${s + c}`
//         console.log(`${s} + ${c} = ${s + c}`)
//     }
    
// }
// console.log(minhaprimeiraFuncao())
// console.log(segundaFuncao())
// minhaprimeiraFuncao()

//! esta é uma funcao anonima = não tem nome na função, ela recebe uma função 
const minhaSegundaFunc = function( ) {
    return 'Escrevendo minha função anonima'
}

console.log(minhaSegundaFunc())

// !esta é uma arrow function = representa uma função por meio da seta =>,simplifica a função 
// paramentros= informaçoes que queremos passar pra funçar utilizar
// exemplos de fazer= const j = _ => '' / const j = (nome,idade)=> / const j = nome => ''

const j = () => {
    return 'esta é uma arrow function'
}
console.log(j())

const w = nome => `Ola ${nome}, esta é uma arrow function`

console.log(w('Evely'))

const w2 = (nome) => {
    return `Ola ${nome}, esta é a arrow function w2`
}
console.log(w2('Evely Santos'))