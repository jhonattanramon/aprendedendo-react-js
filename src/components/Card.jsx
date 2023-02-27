import React from "react";

import Button from "./Button";

import "./Card.css"

const Card = () => {   

    

    return(

        <div className="container-card">
            <div>
                <img src="" alt="" />
            </div>

            <div>
                <h2>test</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa perferendis? Dicta eum ad culpa vitae dolor, ex minus ipsa adipisci magni esse atque. Totam minima soluta accusantium distinctio magnam? 
                </p>

            </div>

            
            <Button>terms & coditions</Button>
            <Button> Join Now </Button>
            
            
        </div>
        
        
    )
}

export default Card;