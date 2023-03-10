import { useState } from "react";

const Form = () =>{

    const cadastrarUsuario = (e) => {
        e.preventDefault()

        console.log(name);
        console.log(password);
        


    console.log('usuario cadastrado!');
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(

        <> 
        <div>

            <form onSubmit={cadastrarUsuario}>

                <div>
                    <label htmlFor="inputNome">Nome:</label>

                    <input type="text" 
                    name=""
                     id="inputNome"
                     onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="inputSenha">Senha:</label>
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value) } />
                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

                
            </form>
        </div>
        </>
    )
}
export default Form