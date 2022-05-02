let  listaDeFilmes = [
    'https://images-na.ssl-images-amazon.com/images/I/51oXu7N-AOL.jpg',
    'https://media.fstatic.com/dxYlAYTTnAOGgZBBHHHHOoDp2zs=/290x478/smart/media/movies/covers/2021/06/kc0YEjL5iLjEbedhpqqpaaUEPZa.jpg',
    'https://cdn.fstatic.com/media/movies/covers/2018/10/2111834923.jpg',
    'https://media.movieassets.com/static/images/items/movies/posters/c4b69eefc8ac80417963cc5b546bbfbe.jpg',
    'https://image.tmdb.org/t/p/w1280/hX5tQfhCu2aY0VFhQMIMNvrhM1r.jpg'


]
let listaDeTitulos = [
    'Crepúsculo',
    'RED: Crescer é uma fera',
    'Missão Impossível: Efeito Fallout',
    'Cinderela',
    'Sherlock Holmes'
]

//! DOM = Docment object model= usado para acesar a pagina html pelo js, para poder manusea-lo
// queryselector ou getElementbyID/name/class/tagname
// document.getElementById = pegar pelo emento do 
let catalogo = document.querySelector("#catalogo")
let i = 0
let erro =  document.querySelector("#erro")

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div class ="filme">
        <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}
    </div> `
}

let filmeRepetido = true

function cadastrar() {
    // o .value é para pegar o que esta sendo digitado la na pagina, mas so para acessar o valor, não pegar e modificar , mexer nele
    let novoFilme = document.querySelector ('#filme').value
    // console.log(novoFilme)
    let novoTitulo = document.querySelector('#titulo').value
    // console.log(novoTitulo)

    if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
    } else {
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
// apagar o erro anterior
        erro.innerHTML = ''
// função para mostrar os filmes 
        mostrarFilmes()
    }

    document.querySelector('#fime').value = ''
    document.querySelector('#titulo').value = ''
}

function mostrarFilmes() {
    do {
        catalogo.innerHTML += `
        <div class = "filme">
            <img sc=${listaDeFilmes[i]} alt=${listaDeTitulos[i]}>figcaption<${listaDeTitulos[i]}
        </div>
        `   
        i++
    }while(i < listaDeFilmes.length)
}