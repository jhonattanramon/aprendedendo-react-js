import React from 'react'
import "./TelaDeResultado.css"

const TelaDeResultado = () => {


    return(
        <> 
            <div className='backgroud'>
                <div> 
                    
                <div><h3>valor da Parcela</h3></div>
                <div style={{fontSize:""}}>R$<span></span></div></div>

                <div>
                    <div>Total a pagar</div>
                    <div>R$ <span></span></div>

                    <div>Taxa de Jutos(mês)</div>
                    <div></div>
                </div>

                <div> <button className='buttonSolicitar'>SOLICITAR</button></div>
            </div>
        </>
    )
}



 
export default TelaDeResultado