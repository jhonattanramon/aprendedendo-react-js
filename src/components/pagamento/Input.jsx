
import React from "react";



const Input = ( {type} ) =>{

const styleInput = {
    width: '100%',
    padding: '5px',
    size: "10px"
};
    

    return <input style={styleInput} type={type} />
}   



export default Input;
