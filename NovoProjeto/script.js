// js normal , vai pegar a api
function pegaDados(){
    console.log('pega dados funcionando');

    // requisição para carregar os conteudos conforme a pessoa vai pedindo, recebe um unico paramentro = json
    $.ajax({ 
        url:"https://iot.14mob.com/lista.json", // pega onde va  enviar
        data:"",
         // paramentro de busca
        success: function(retorno){
            tratarDados(retorno)
        }, 
        // terminar quando terminar
        dataType: "html" 
        // tipo de dados que vai vir, coloca html pq pode ser qualquer tipo, se não soubermos o tipo q vai vir
    }) 
}
// pegaDados(); // testando

function tratarDados(dados) {
    dados = JSON.parse(dados); 
//    console.log(dados);

    var lista = $('.listaItens')

    $(dados).each(function(index,valor){

        let conteudo = `<div class="col-md-4">
                <div class="card">
                    <img src="${valor.imagem}" class= "card-img-top" onclick="abrirModal('${valor.nome,valor.imagem,valor.descricao}')" alt="terjsdndcn">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary abrirModal" onclick="abrirModal('${valor.nome,valor.imagem,valor.descricao}')">
                        Detalhes
                    </button>
                    </div>
                </div>
            </div>`;

        lista.append(conteudo);
    
    })
}

function abrirModal(nom,img,desc) {
    let conteudo = `<div class="col-md-12">
                <div class="card" >
                    <img src="${img}" class="card-img-top" alt="terjsdndcn">
                    <div class="card-body">
                    <h5 class="card-title">${nom}</h5>
                    <p class="card-text">${desc}</p>
                </div>
                </div>
         </div>`;

    $('.detalheItem').html(conteudo)
    $('#exampleModal').modal('show');

}

// jquery = usa $ para chamar ela, vai mandar o escopo para o jquey trabalhar, faz o jquery carregar antes do js
$(function(){
    pegaDados();
})