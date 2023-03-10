import React from "react";
import LabelInput from "./LabelInput";
import TelaDeResultado from "./TelaDeResultado";

const ContainerSimulacao = () =>{
    
    return(

        
    <div style={{background: "#F5F5F5",  flex:1, flexDirection:"row"}}>

                <h1>Realize uma simulação de credito utilizando seu bem como garantia.</h1>

            <section style={{fle:1, display:'flex', justifyContent:"center", alignContent: "center"}}>

        <div style={{display:'flex', flexWrap: 'wrap',flex:1, margin: 10, gap: 30 }}>

        <LabelInput name='Garantia' type="text"/>

        <LabelInput name='Número de parcelas' type="number"/>

        <LabelInput name='Valor da Garantia' type="number" />
        
        <LabelInput name='Valor do Empréstimo' type="number" />
        
        </div>

        <div style={{flex: 1, margin: 10}}>
            <TelaDeResultado />
        </div>

            </section>
    </div>
    
    
    )
}

export default ContainerSimulacao