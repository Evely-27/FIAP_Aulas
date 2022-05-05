// ! quais as informações que preciso para calcular a idade de uma pessoa?

//? ano de nascimento
// ?ano atual
// ?mes de nascimento
// ? mes atual
// ?idade 

let anoNasc = 1999
let mesNasc = 11
let anoAtual = 2022
let  mesAtual = 5


// esta calculo esta certo, porem insulficinte para calcular  a idade de forma correta
let idade = anoAtual - anoNasc
// ! condicional que verifica o mes, se não tiver feito aniversario , tira um ano
if (mesAtual < mesNasc) {
    idade -= 1
}
console.log(idade)