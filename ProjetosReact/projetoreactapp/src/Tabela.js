import axios from "axios";
import { useEffect, useState } from "react";


function Tabela(){

    const [usuarios, setUsuarios] = useState([]);

    const [nome,setNome] = useState("");// variavel para acessar a varivel, é como o metodo privat de classe, ai acessamoa a variavel nome pela setNome
    const [ email, setEmail] = useState("");
    const [senha, setSenha] =useState("");

    function salvarFormulario() {

        //criar variavel com ojteto, que vão ser as capturadas no set
        let parametros = {
            name: nome,
            email: email,
            password: senha

        }

        //criar chamada para salvar o formulario, o them é para se der certo, fazer algo
        axios.post('https://iot.14mob.com/api-fiap/public/index.php/users',parametros).then(response => {
            //se a resposta der certo
            if(response.status == 201){
                alert('Deuuuu certooo essa bagaçaaaaa')
            }else{
                alert('deu merda viu')
            }
        }).catch( error =>console.log(error)); // o cath é para se nem for aceita a requisições ele vai dizer o erro
    }

    function removerUser (id) {
           // console.log('funcionaouuuuuuuuu '+id);

           axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then(response => {
               alert('Usuario removido.')
           }).catch(error => console.log(error));
    }



  useEffect(() => {
        axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
            setUsuarios(response.data.users); // no link da api, tem que entrar acessando a chave user antes{} para depois ele poder acessar o array
            console.log(response);
        })
    },[])


  return (
        <div>
            <form className="formulario" onSubmit={event =>{
                event.preventDefault();// evita de deixar ountro evento chamar ele
                salvarFormulario(); // função salvar os dados enviados pelo formulario
                return false;
            }}>{/*  action="meuEndereco" method="post" */}
                {/* todo formulario tem dois paraemetos: action = para onde esta mandando e o method= o metodo q sera enviado as infos. */}
            {/* porem vamos fazer essa intercepção pelo butao, então criamos uma const */}
                <label>Nome</label>
                <input name= "name" onChange={e => setNome(e.target.value)}></input>  {/* onChange: fica ouvindo, se mudar o estado, faça algo */}
                <label>Email</label>
                <input email= "email" onChange={e => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input name="password" onChange={e => setSenha(e.target.value)}></input>
            <button type="submit">Enviar</button> 
            </form>
            {/* queremos q ao enviar, sejam populadas as variavel */}
            <p>{nome}</p>
            <p>{email}</p>
            <p>{senha}</p>
            {/* toda vez que fazer o butao submit , ele vai postar */}
             <table className='minhaTabela'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Açôes</th>
                    </tr>
                
                </thead>  
                <tbody> 
                    { usuarios.map( usuario => {
                        return (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>  {/* no api esta com o id como name */}
                                <td>{usuario.email}</td>
                                <td>
                                    <button onClick={ event => removerUser(usuario.id)}> Deletar </button>
                                </td>
                            </tr>
                            )
                    } ) }
                </tbody>
            </table>
        </div>
      
  );
}

export default Tabela;