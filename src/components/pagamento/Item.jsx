

const Item = ({name, valor}) =>{

    const styleItem = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10', 
        width: '100%',
        padding: '4px 0',
        
    }

    const styleName = {
        
    }
    return(
        <>
        <li style={styleItem}>
            <span>
            {name}
            </span>


            <span>
                <span>R$</span>
                <span>{valor}</span>
            </span>
        </li>
        </>
    )
}

export default Item;