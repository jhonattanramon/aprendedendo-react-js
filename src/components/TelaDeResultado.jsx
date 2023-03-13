import React, { useState } from 'react'
import "./TelaDeResultado.css"

const TelaDeResultado = ({numeroDePercelas, garantia, emprestimo}) => {

    const [juros, setJuros] = useState()

    const CalcularNumeroDeParcela = () => {
        const porcentagemDeParcelaMensal = 0.84
        
        setJuros(numeroDePercelas * porcentagemDeParcelaMensal)
        
    }

    CalcularNumeroDeParcela()

    return(
        <> 
            <div className='backgroud'>
                <div> 
                    
                <div><h3>valor da Parcela</h3></div>
                <div style={{fontSize:""}}>R$<span></span></div></div>

                <div>
                    <div>Total a pagar</div>
                    <div>R$ <span>{juros}</span></div>

                    <div>Taxa de juros(mês)</div>
                    <div></div>
                </div>

                <div> <button className='buttonSolicitar'>SOLICITAR</button></div>
            </div>
        </>
    )
}



 
export default TelaDeResultado