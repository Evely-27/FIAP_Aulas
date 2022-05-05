//!  variavel global e variavel local // variavel= vc não pode prever suas açoes

// varivel global= afeta todo o sistema, pode ser criada em qualquer local, em qualquer local do codigo , poderá ser acessada ou usada

// var: pode ser usada em todo o escopo(no caso, se dentro de uma função, vai ser usada nela toda)
// let: tb vai ser usada em toda o escopo, porem se dentro de uma função,por exemplo, so será exibida de a condição for realizada
let nome = 'Evely'
let idade = 22
let cidade = 'Olinda'

function cidadao(nom,ida,cid) { // os paramentros não precisam receber o nome o mesmo nome do que vão receber
    let naturalidade = 'Olindense' // variavel local, criada dentro de uma função
    if (cid === 'Olindense') {
        console.log(naturalidade)
        return `${nom}, ${ida}, ${naturalidade}`
    } else {
        console.log(naturalidade)
        return
    }
}
console.log(nome)
console.log(idade)
console.log(cidade)
console.log(cidadao(nome,idade,cidade)) // mandamos as variaves que queremos que ele trabalhe
console.log(naturalidade) // so vai ser acessada dentro da função, ao rodar, fica como não definida