// math.random osrteira numeros de 1 ate 100(acho)
// math.floor arredonda o numero para inteiro


// variavel global
let a = Math.floor(Math.random() * 1000)
function minhaprimeiraFuncao(){
    let b = Math.floor(Math.random() * 1000)
    // return a + b
    return `${a} + ${b} = ${a + b}` 
}


let s = Math.floor(Math.random() * 1000)
function segundaFuncao(){
    let c = Math.floor(Math.random() * 1000)
    if(s > c ) {
        return `${s} - ${c} = ${s + c}` 
    } else {
        return `${s} + ${c} = ${s + c}`
    }
    
}
console.log(minhaprimeiraFuncao())
console.log(segundaFuncao())