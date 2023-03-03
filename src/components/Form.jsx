
const Form = () =>{

    const cadastrarUsuario = (e) => {
        e.preventDefault()
        
        console.log(e);

    console.log('usuario cadastrado!');
    }

    return(

        <> 
        <div>

            <form onSubmit={cadastrarUsuario}>

                <div>
                    <input type="text" name="" id="" />
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