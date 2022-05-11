import axios from "axios";
import {useEffect, useState} from "react"; // useEffect = tipo um construtor,fica chamnda a função de forma automatica, é usado quando a pagina for executada, useState= deixa manipular o conteudo da variavel em tempo de execução

//carreguei a pagina, quero q carrega o axios



function Tabela() {

    // vamos contruir uma conts para deixar dinamico, mais localmente
const lista_usuarios = [ //criamos uma const deita de array, que criamos objts joson dentro
    {id: 1, nome:'evely', email: 'evely_santos.com'},
    {id: 2, nome:'Nando', email: 'nando_santis.com'},
    {id: 3, nome:'Higo',  email: 'higo_inez.com'},
    {id: 4, nome:'Luis',  email: 'luis_carlos.com'},
]
    return ( //esta retornando um componente

    <table className='minhaTabela'>
    <thead>
        <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        </tr>
    
    </thead>  
    <tbody> 
        { lista_usuarios.map( usuario => {
            return (
                <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.email}</td>
                </tr>
                )
        } ) }
    </tbody>
  </table>

        // <table className='minhaTabela'>
        //       <tr>  {/* linha */}
        //           <th>Id</th>  {/* conteudo do cabeçalho */}
        //           <th>Nome</th>
        //           <th>Email</th>
        //       </tr>
        //       {/* a chave {} é para escrever o js dentro do componente */}
        //     {lista_usuarios.map( usuario => { //função map= lop,percorre um arry, dai criamos uma arrow function e jogamos o que queremos que seja jogado na variavel usuario
        //         //console.log(usuario);
        //         return <tr key={usuario.id}> {/* o key server para colocarmos uma indentificação em cada lista */}
        //                 <td>{usuario.id}</td> {/* td = conteudo da linha */}
        //                 <td>{usuario.nome}</td>
        //                 <td>{usuario.email}</td>
        //          </tr>
        //     })}
             
        //   </table>
    );
}

export default Tabela; 