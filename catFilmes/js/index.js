let  listaDeFilmes = [
    'https://images-na.ssl-images-amazon.com/images/I/51oXu7N-AOL.jpg',
    'https://media.fstatic.com/dxYlAYTTnAOGgZBBHHHHOoDp2zs=/290x478/smart/media/movies/covers/2021/06/kc0YEjL5iLjEbedhpqqpaaUEPZa.jpg',
    'https://cdn.fstatic.com/media/movies/covers/2018/10/2111834923.jpg'


]
let listaDeTitulos = [
    'Crespúsculo',
    'RED: Crescer é uma fera',
    'Missão Impossível: Efeito Fallout'
]

//! DOM = Docment object model= usado para acesar a pagina html pelo js, para poder manusea-lo
// queryselector ou getElementbyID/name/class/tagname
// document.getElementById = pegar pelo emento do 
let catalogo = document.querySelector('#catalogo')
let i = 0
let erro =  document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div>
        <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
    </div> `
}