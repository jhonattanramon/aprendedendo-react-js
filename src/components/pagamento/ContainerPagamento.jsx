import React from "react"
import Input from "./Input";
import Label from "./Label";
import Lista from "./ListaDeinformacoesDepagemento";


const ContainerPagamento = () => {
    
    return(

        <>

        <div className="containerPagamento">
            
            <div>

            <div> <h2>Cartão de crédito</h2></div>
            <div>
                <div>
                <Label nome="Núnero" />
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

            <div>
                <span>
                    <div>
                <Label nome="Data de validade"></Label>
                    </div>
                    <div>
                <Input type="date"></Input>
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


            <div>
                <Lista />
            </div>
        </div>
    </>


)
}

export default ContainerPagamento;