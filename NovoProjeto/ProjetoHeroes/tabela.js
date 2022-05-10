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
              <button type="button" class="btn btn-primary" onclick="abrirPoderes('${objson.Nome}','${objson.imagem}','${objson.Poderes}')">
                Visualizar
              </button>
        </td>
      </tr>`; 

      let conteudo = $('.conteudoTabela');
      conteudo.append(contMostrar);
    })
}



pegarDados(); // chamar função pegarDados , vai apresentar na tela


// $(function() {
//     console.log("Hello world");
//     carregarDados();
// })