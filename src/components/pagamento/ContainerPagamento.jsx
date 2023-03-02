import React from "react"
import Input from "./Input";
import Label from "./Label";


const ContainerPagamento = () => {
    
    return(

        <>

        <div className="containerPagamento">
            
            <div>

            <div> <h2>Cartão de crédito</h2></div>
            <div>
                <Label appendChild={'numero'} />
                <Input />
            </div>

            <div>
                <Label />
                <Input />

            </div>

            <div>
                <Label></Label>
                <Input></Input>

                <Label> </Label>
                <Input />

            </div>


            </div>

        </div>
    </>


)
}

export default ContainerPagamento;