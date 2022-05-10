// js normal , vai pegar a api
function pegaDados(){
    console.log('pega dados funcionando'); // confirmando que esta pegando os dados

    $.ajax({      // requisição para carregar os conteudos conforme a pessoa vai pedindo, recebe um unico paramentro = json
        url:"https://iot.14mob.com/lista.json", // pega onde va  enviar
        data:"",  // paramentro de busca
        success: function(retorno){ // função que retorna algo ao ter os dados, aceita somente uma função
            tratarDados(retorno) // chamado da função que vai tratar os dados pegos 
        }, 
        dataType: "html"  // tipo de dados que vai vir, coloca html pq pode ser qualquer tipo, se não soubermos o tipo q vai vir
    }) 
}
// pegaDados(); // testando

function tratarDados(dados) {
    dados = JSON.parse(dados); 
//    console.log(dados); confirmar que esta pegando os dados

    var lista = $('.listaItens') // variavel que vai sincronizar com a classe listaItens, que trata do conteudo que será apresentado no container, 1° a aparecer

    $(dados).each(function(index,valor){ //jquery aceita tudo($()) , depois faz um foreach para percorrer os dados pegos. So aceita uma função
//variavel local para apresentar o conteudo dentro de listaItens.
        let conteudo = `<div class="col-md-4"> 
                <div class="card">
                    <img src="${valor.imagem}" class= "card-img-top" onclick="abrirModal('${valor.nome},${valor.imagem},${valor.descricao}}')" alt="foto de cachorro">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary" onclick="abrirModal('${valor.nome}','${valor.imagem}','${valor.descricao}')">
                        Detalhes
                    </button>
                    </div>
                </div>
            </div>`;

        lista.append(conteudo); //pega a varivel sincronizada com listaItens e joga "conteudo" para ser apresentada nela
    
    })
}

function abrirModal(nom,img,desc) { // função chamada no button em tratarDados/card
//variavel local para apresentar o conteudo dentro de detalheItem, classe que trata do modal.
    let conteudo = `<div class="col-md-12">
                <div class="card" >
                    <img src="${img}" class="card-img-top" alt="foto cachorro">
                    <div class="card-body">
                    <h5 class="card-title">${nom}</h5>
                    <p class="card-text">${desc}</p>
                </div>
                </div>
         </div>`;

    $('.detalheItem').html(conteudo) //pega a varivel sincronizada com detalheItem e jpga "conteudo" para ser apresentada nela
    $('#exampleModal').modal('show'); //! não entendi

}

// jquery = usa $ para chamar ela, vai mandar o escopo para o jquey trabalhar, faz o jquery carregar antes do js
$(function(){
    pegaDados();
})