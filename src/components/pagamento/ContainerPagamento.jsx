import React from "react"
import Input from "./Input";
import Label from "./Label";
import Lista from "./ListaDeinformacoesDepagemento";
import Button from "./Button";

import './containerPagmento.css'

const ContainerPagamento = () => {
    
    return(

        <>

        <div className="containerPagamento">
            
            <div className="DivPrenchimentoParaCartao">

            <div> <h2>Cartão de crédito</h2></div>
            <div>
                <div>
                <Label nome="Número" />
                 </div>
                
                <div>
                <Input type="number"/>
                </div>
            </div>

            <div>
                <div>
                <Label nome="Nome do titular do cartão" />
                </div>

                <div>
                <Input type="text"/>
                </div>

            </div>

            <div className="divAlight">
                <span>
                    <div>
                <Label nome="Data de validade"></Label>
                    </div>
                    <div>
                <Input type="number"></Input>
                    </div>
                </span>

                <span>
                    <div>
                <Label nome="Código CVV"> </Label>
                    </div>
                
                    <div>
                <Input type="number" />
                    </div>
                </span>
            </div>


            </div>


            <div className="divLista">
                <Lista />
                <Button name = "Finalizar pedido" /> 
                
            </div>
        </div>
    </>


)
}

export default ContainerPagamento;