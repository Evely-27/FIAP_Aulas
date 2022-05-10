/* Primeiro vamos carregar os dados que estão na 
lista json para poder-mos deixar o html dinamico */

function pegarDados() {
    console.log("A função pegar dados esta funcionando!!");

    $.ajax({
        url: "lista.json", // pega infos de qualquer lugar
        data: "",      //recebe parametros de consulta, tipo filtro
        // success: "",      // se tiver sucesso , faça...
        success:function(dadospegos){     //dadospegos= info que estão na lista.json
            console.log(dadospegos);

            tratarDados(dadospegos);
        },
        dataType: "json" // aqui definimos o tipo de dados que vai vir, geralmente colocamos html se não soubermos o tipo.
    });
}
// pegarDados() testar função pegarDados

function tratarDados(objson) {
    $(objson).each(function(index,dadosJ){
        
        // variavel local para mostrar o conteudo no corpo da tabela, o conteudo nela
        let contMostrar = ` <tr>
        <th>${dadosJ.id}</th>
        <td><img class="foto" src="${dadosJ.imagem}"</td>
        <td>${dadosJ.Nome}</td>
        <td>${dadosJ.NomeH}</td>
        <td>
              <button type="button" class="btn btn-primary" onclick="abrirPoderes('${dadosJ.Nome}','${dadosJ.imagem}','${dadosJ.Poderes}')">
                Visualizar
              </button>
        </td>
      </tr>`; 

      let conteudo = $('.conteudoTabela'); // sincronizando a classe conteudoTabela na variavel conteudo.
      conteudo.append(contMostrar); //jogando na variavel  conteudo o contMostrar, será mostardo de forma incremental
    })
}

// criando função abrirPoderes
function abrirPoderes(heroi,foto,poder) {
    console.log(heroi,foto,poder);

    let contModal = `<div class="col-md-12">
                    <div class="card" >
                        <img src="${foto}" class="card-img-top"  alt="foto de heroi">
                        <div class="card-body">
                        <h5 class="card-title">${heroi}</h5>
                        <p class="card-text">${poder}</p>
                    </div>
                    </div>
                </div>`;
    
    $('.conteudoModal').html(contModal)
    $('#exampleModal').modal('show');
}


pegarDados(); // chamar função pegarDados , vai apresentar na tela


// $(function() {
//     console.log("Hello world");
//     carregarDados();
// })