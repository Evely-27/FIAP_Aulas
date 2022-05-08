// js normal , vai pegar a api

function pegaDados(){
    console.log('pega dados funcionando');

    $.ajax({ // requisição para carregar os conteudos conforme a pessoa vai pedindo, recebe um unico paramentro = json
        url:"https://iot.14mob.com/lista.json", // paea onde va  enviar
        data:"", // paramentro de busca
        sucess:function(retorno){
            tratarDados(retorno)
        }, // terminar quando terminar
        dataType: "html" // tipo de dados que vai vir, coloca html pq pode ser qualuqer tipo, se não soubermos o tipo q vai vim
    }) 
}
// pegaDados(); // testando
function tratarDados {
    dados = JSON.parse(dados);
    // console.log(dados);

    $(dados).each(function(chave,valor){
        let conteudo = ` <div class="col-lg-4">
        <div class="card"> <!-- style="width: 18rem;" ele coloca a largura de 18rem-->
            <img src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Botão que ativa o modal 
              </button>
            </div>
        </div>
    </div>`;
    
    })
}

// jquery = usa $ para chamr ela, vai mandar o escopo para o jquey trabalhar, faz o jquery carregar antes do js
$(function(){
    pegaDados();
})