import React from "react";
import InputRange from "./InputRange";
import LabelInput from "./LabelInput";
import TelaDeResultado from "./TelaDeResultado";
import { useState } from "react";

const ContainerSimulacao = () =>{
    
    const [garantia, setGarantia] = useState()
    
    const [emprestimo, setEmprestimo] = useState()

    const [numeroDaParcela, setNumeroDaParcela] = useState()

       console.log(numeroDaParcela);
    return(

            

        
    <div style={{background: "#F5F5F5",  flex:1, flexDirection:"row"}}>

                <h1>Realize uma simulação de credito utilizando seu bem como garantia.</h1>

            <section style={{fle:1, display:'flex', justifyContent:"center", alignContent: "center"}}>

        <div style={{display:'flex', flexWrap: 'wrap',flex:1, margin: 10, gap: 30 }}>

        <LabelInput setProps={setNumeroDaParcela} name='Número de parcelas' type="number"/>
        
        <LabelInput name='Garantia' type="text"/>

        <LabelInput setProps={setGarantia} value={garantia}  name='Valor da Garantia' type="number" />

        <InputRange min={0} max={100000} setProps={setGarantia}/>
        
        <LabelInput setProps={setEmprestimo} value={emprestimo}  name='Valor do Empréstimo' type="number" />
        
        <InputRange min={0} max={100000}  setProps={setEmprestimo}/>


        </div>

        <div style={{flex: 1, margin: 10}}>
            <TelaDeResultado  numeroDePercelas={numeroDaParcela}/>
        </div>

            </section>
    </div>
    
    
    )
}

export default ContainerSimulacao