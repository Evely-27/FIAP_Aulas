// é forma de se escrever um comentario em linha no js (ctrl+;)

// var= atinge todos os nives da função, let= abrange pouco ,const= valor não muda
// === compra valor e tipo

//  tipos= number(qualquer numero), string, booleano, array, objeto,par-chave-valor
// boa praticas: se for por ; tem q ser em tudo, ou em nada
var a = 1

let b = 3

// ao iniciar a const tem que ja dar o valor
const c = 5;

var nuns = [1,4.9,3,0.7,5]
// interpolação: usa crase `` e dentro coloca o ${} para poder usar o cod na string
var texts = ['L=ucas', "Sarah", `Meu array de numeros é ${nuns}`]

var bool = [true, false]
// true é diferente de  'true'

// pode instancia um objeto sem classe

var obj = {
    nome: 'Evely',
    idade: 22,
    cidade: 'Olinda',
    profissao: 'Dev'
}
console.log(obj.nome)

let avanade = [
    {
        nome: 'Fernandez',
        idade: 29,
        cidade: 'Belo Horizonte'
    },
    {
        nome: 'Danilo',
        idade: 45,
        cidade: 'São Paulo'
    },
    {
        nome: 'Nuna',
        idade: 76,
        cidade: 'Caxias'
    }

]
console.log(avanade)
console.log(avanade[1].cidade)
