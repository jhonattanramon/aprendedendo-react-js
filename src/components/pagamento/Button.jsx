import React from "react";

const Button = (props) => {

    const styleButton =  {
        padding: '14px 0 ',
        border: 'none', 
        background: '#B100EA',
        borderRadius:'5px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '13pt',
        width: '90%',
        
    }

    return <button style={styleButton}>{props.name}</button>
}

export default Button;