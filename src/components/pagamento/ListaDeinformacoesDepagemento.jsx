

import Item from "./Item";

const Lista = () =>{

    const styleItemLista = {
        listStyle: 'none',
        width: '100%',

        
    }

    return( 
        <>
        <ul style={styleItemLista}>

        <Item name = "Produtos:" valor = {600}/>
        <Item name = "Frete:" valor={5}/> 
        <Item name="Desconto:" valor={30} />
        <Item name="SubTotal:" valor={635} />
        
        
        </ul>
        </>
    )
}

export default Lista;